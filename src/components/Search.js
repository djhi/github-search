import { useEffect, useState } from 'react';
import { tw } from 'twind';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { useGithubUsersSearch } from './useGithubUsersSearch';

export const Search = () => {
	const [query, setQuery] = useState();

	const {
		data,
		refetch,
		hasNextPage,
		fetchNextPage,
		total,
	} = useGithubUsersSearch(query);

	useEffect(() => {
		if (query) {
			refetch();
		}
	}, [refetch, query]);

	const handleSubmit = (newQuery) => {
		setQuery(newQuery);
	};

	const handleLoadNextPage = (event) => {
		// Keeping the focus on the button would make the page scroll to this button
		// which would be weird for the user as they would loose their current scroll position.
		event.currentTarget.blur();
		fetchNextPage();
	};

	return (
		<div className={tw`flex flex-col my-2`}>
			<SearchInput
				label="Search for users"
				placeholder="Search Github"
				onSubmit={handleSubmit}
			/>
			{!!data && (
				<>
					<p className={tw`my-1`}>Found {total} users matching your query.</p>
					<SearchResults
						items={data}
						hasNextPage={hasNextPage}
						onLoadNextPage={handleLoadNextPage}
					/>
				</>
			)}
		</div>
	);
};
