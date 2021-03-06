import NextApp from 'next/app';
import { SSRProvider } from '@react-aria/ssr';

import { setup } from 'twind';

// If this run on the server _document.js has already done the setup
if (typeof window !== 'undefined') {
	setup();
}

const App = (props) => (
	<SSRProvider>
		<NextApp {...props} />
	</SSRProvider>
);

export default App;
