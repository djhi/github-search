import React from 'react'
import { tw } from 'twind'

import Head from '../components/Head'

const Home = () => (
	<>
		<Head title="Home" />

		<main
			className={tw`h-screen bg-purple-400 flex items-center justify-center`}
		>
			<h1
				className={tw`font-bold text(center 5xl white sm:gray-800 md:pink-700)`}
			>
				This is Twind!
			</h1>
		</main>
	</>
)

export default Home
