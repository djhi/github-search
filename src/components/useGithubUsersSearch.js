import { useInfiniteQuery } from 'react-query';
import { gql, GraphQLClient } from 'graphql-request';

/**
 * This hooks returns a query to search for users on github
 */
export const useGithubUsersSearch = (query, perPage = 10) => {
	const graphQLClient = new GraphQLClient(
		process.env.NEXT_PUBLIC_GITHUB_GQL_ENDPOINT,
		{
			headers: {
				authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
			},
		},
	);

	const { data, refetch, hasNextPage, fetchNextPage } = useInfiniteQuery(
		['users', query],
		async ({ pageParam }) => {
			const { search } = await graphQLClient.request(
				gql`
					query($query: String!, $perPage: Int!, $after: String) {
						search(type: USER, query: $query, first: $perPage, after: $after) {
							userCount
							pageInfo {
								hasNextPage
								hasPreviousPage
								startCursor
								endCursor
							}
							edges {
								node {
									... on User {
										name
										login
										id
										bio
										avatarUrl
										followers {
											totalCount
										}
									}
								}
							}
						}
					}
				`,
				{ query, perPage, after: pageParam },
			);

			return search;
		},
		{
			enabled: false,
			keepPreviousData: true,
			getNextPageParam: (lastPage) =>
				lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
		},
	);

	return {
		total: data?.userCount,
		data: data?.pages
			.flatMap((page) => page.edges.map((edge) => edge.node))
			.filter((node) => !!node.id && !!node.login),
		refetch,
		hasNextPage,
		fetchNextPage,
	};
};
