import React from 'react';

import { SearchInput } from './SearchInput';

const story = {
	title: 'Components/SearchInput',
	component: SearchInput,
};

export default story;

export const Basic = () => (
	<SearchInput label="Searh" placeholder="Type something" />
);
