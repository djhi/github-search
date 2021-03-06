import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { tw } from 'twind';

import Head from '../components/Head';
import { Search } from '../components/Search';

const queryClient = new QueryClient();
const Home = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Head title="Home" />

			<main className={tw`h-screen flex flex-col pt-24 p-16`}>
				<Search />
			</main>
		</QueryClientProvider>
	);
};

export default Home;
