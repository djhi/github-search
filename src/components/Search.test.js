import { render, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import nock from 'nock';
import { Search } from './Search';

describe('Search', () => {
	test('should allow to search for users', async () => {
		const queryClient = new QueryClient();
		process.env.NEXT_PUBLIC_GITHUB_GQL_ENDPOINT =
			'http://api.github.com/graphql';

		nock('http://api.github.com')
			.post('/graphql')
			.reply(200, {
				data: {
					search: {
						userCount: 126,
						pageInfo: {
							hasNextPage: true,
							hasPreviousPage: false,
							startCursor: 'Y3Vyc29yOjE=',
							endCursor: 'Y3Vyc29yOjEw',
						},
						edges: [
							{
								node: {
									name: 'Gildas Garcia',
									login: 'djhi',
									id: 'MDQ6VXNlcjExMjIwNzY=',
									bio: 'Self-educated developer since 2000. Working @marmelab!',
									avatarUrl:
										'https://avatars.githubusercontent.com/u/1122076?u=f0c921a9936a7af17c272ca8857044c079ccd225&v=4',
									followers: { totalCount: 122 },
								},
							},
							{
								node: {
									name: null,
									login: 'djhiggs',
									id: 'MDQ6VXNlcjExMjc2NTg2',
									bio: null,
									avatarUrl:
										'https://avatars.githubusercontent.com/u/11276586?v=4',
									followers: { totalCount: 9 },
								},
							},
							{
								node: {
									name: 'David Hinton',
									login: 'djhinton1',
									id: 'MDQ6VXNlcjU0NDkwMTY0',
									bio:
										'Undergraduate industrial engineer at the University of Pittsburgh.',
									avatarUrl:
										'https://avatars.githubusercontent.com/u/54490164?u=a9f1c26ecf2a777ac456c71e6a90c87ba1aa0d5d&v=4',
									followers: { totalCount: 2 },
								},
							},
							{
								node: {
									name: null,
									login: 'djhindley',
									id: 'MDQ6VXNlcjI2NDg3ODI0',
									bio: null,
									avatarUrl:
										'https://avatars.githubusercontent.com/u/26487824?v=4',
									followers: { totalCount: 3 },
								},
							},
							{
								node: {
									name: null,
									login: 'DJHicban',
									id: 'MDQ6VXNlcjg3MjExNjk=',
									bio: null,
									avatarUrl:
										'https://avatars.githubusercontent.com/u/8721169?v=4',
									followers: { totalCount: 0 },
								},
							},
							{
								node: {
									name: 'Darioushjh',
									login: 'djhir',
									id: 'MDQ6VXNlcjMwMzY0ODMx',
									bio: 'داریوش حقیقی - طراح سایت و سئو',
									avatarUrl:
										'https://avatars.githubusercontent.com/u/30364831?v=4',
									followers: { totalCount: 1 },
								},
							},
							{
								node: {
									name: null,
									login: 'DjHippieSon15',
									id: 'MDQ6VXNlcjc0MTA2Nzky',
									bio: null,
									avatarUrl:
										'https://avatars.githubusercontent.com/u/74106792?v=4',
									followers: { totalCount: 0 },
								},
							},
							{
								node: {
									name: null,
									login: 'djhillman7',
									id: 'MDQ6VXNlcjE0MzQyMTQ5',
									bio: null,
									avatarUrl:
										'https://avatars.githubusercontent.com/u/14342149?v=4',
									followers: { totalCount: 0 },
								},
							},
							{
								node: {
									name: null,
									login: 'djhibee',
									id: 'MDQ6VXNlcjEwNjMyNjY3',
									bio: null,
									avatarUrl:
										'https://avatars.githubusercontent.com/u/10632667?v=4',
									followers: { totalCount: 0 },
								},
							},
							{
								node: {
									name: 'Damian Hippisley',
									login: 'djhipps',
									id: 'MDQ6VXNlcjYwNTg1Nzc=',
									bio:
										'An experienced Moodle PHP developer with an extensive background in Higher Education.',
									avatarUrl:
										'https://avatars.githubusercontent.com/u/6058577?u=024b1a28056ad85cc48d38a07c17663800dfa10a&v=4',
									followers: { totalCount: 0 },
								},
							},
						],
					},
				},
			});

		const { getByLabelText, getAllByRole, getByText } = render(
			<QueryClientProvider client={queryClient}>
				<Search />
			</QueryClientProvider>,
		);

		const searchInput = getByLabelText('Search for users');
		fireEvent.change(searchInput, {
			target: { value: 'djhi' },
		});
		fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

		await waitFor(() => {
			expect(getAllByRole('listitem').length).toEqual(10);
			expect(getByText('Load more').getAttribute('disabled')).toBeNull();
		});
	});

	test('should disable load more button if no more results are available', async () => {
		const queryClient = new QueryClient();
		process.env.NEXT_PUBLIC_GITHUB_GQL_ENDPOINT =
			'http://api.github.com/graphql';

		nock('http://api.github.com')
			.post('/graphql')
			.reply(200, {
				data: {
					search: {
						userCount: 126,
						pageInfo: {
							hasNextPage: false,
							hasPreviousPage: false,
							startCursor: 'Y3Vyc29yOjE=',
							endCursor: 'Y3Vyc29yOjEw',
						},
						edges: [
							{
								node: {
									name: 'Gildas Garcia',
									login: 'djhi',
									id: 'MDQ6VXNlcjExMjIwNzY=',
									bio: 'Self-educated developer since 2000. Working @marmelab!',
									avatarUrl:
										'https://avatars.githubusercontent.com/u/1122076?u=f0c921a9936a7af17c272ca8857044c079ccd225&v=4',
									followers: { totalCount: 122 },
								},
							},
						],
					},
				},
			});

		const { getByLabelText, getAllByRole, getByText } = render(
			<QueryClientProvider client={queryClient}>
				<Search />
			</QueryClientProvider>,
		);

		const searchInput = getByLabelText('Search for users');
		fireEvent.change(searchInput, {
			target: { value: 'djhi' },
		});
		fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

		await waitFor(() => {
			expect(getAllByRole('listitem').length).toEqual(1);
			expect(getByText('Load more').getAttribute('disabled')).not.toBeNull();
		});
	});
});
