import React from 'react';

import { SearchResults } from './SearchResults';

const story = {
	title: 'Components/SearchResults',
	component: SearchResults,
};

export default story;

const items = [
	{
		id: 1,
		name: 'Henry Dorsett Case',
		login: 'cowboy',
		avatarUrl:
			'https://needcoffee.cachefly.net/needcoffee/uploads/2009/05/case-geek-draft.jpg',
		bio:
			'A console cowboy with a custom deck, I can infiltrate the ICE of any corporate systems and steal their data.',
		location: 'Boston-Atlanta Metropolitan Axis',
		followers: {
			totalCount: 42,
		},
	},
	{
		id: 2,
		name: 'Takeshi Kovacs',
		login: 'Tak',
		avatarUrl:
			'https://static.wikia.nocookie.net/altered-carbon/images/1/13/KovacsOGbody.jpg/revision/latest?cb=20180117153309&path-prefix=fr',
		bio: 'Former member of the Colonial Tactical Assault Corps.',
		location: 'Harlan',
		followers: {
			totalCount: 2,
		},
	},
	{
		id: 3,
		name: 'Thomas A. Anderson',
		login: 'neo',
		avatarUrl:
			'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/NeoTheMatrix.jpg/220px-NeoTheMatrix.jpg',
	},
];

const handleLoadNextPage = () => console.log('Load next page');

export const Basic = () => (
	<SearchResults items={items} onLoadNextPage={handleLoadNextPage} />
);

export const WithMorePagesAvailable = () => (
	<SearchResults
		items={items}
		hasNextPage
		onLoadNextPage={handleLoadNextPage}
	/>
);
