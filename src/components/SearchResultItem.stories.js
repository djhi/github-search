import React from 'react';

import { SearchResultItem } from './SearchResultItem';

const story = {
	title: 'Components/SearchResultItem',
	component: SearchResultItem,
};

export default story;

export const WithFullInfo = () => (
	<SearchResultItem
		item={{
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
		}}
	/>
);

export const WithoutName = () => (
	<SearchResultItem
		item={{
			login: 'cowboy',
			avatarUrl:
				'https://needcoffee.cachefly.net/needcoffee/uploads/2009/05/case-geek-draft.jpg',
			bio:
				'A console cowboy with a custom deck, I can infiltrate the ICE of any corporate systems and steal their data.',
			location: 'Boston-Atlanta Metropolitan Axis',
			followers: {
				totalCount: 42,
			},
		}}
	/>
);

export const WithMinimalInfo = () => (
	<SearchResultItem
		item={{
			login: 'cowboy',
		}}
	/>
);
