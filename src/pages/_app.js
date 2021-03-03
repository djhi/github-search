import App from 'next/app'

import { setup } from 'twind'

// If this run on the server _document.js has already done the setup
if (typeof window !== 'undefined') {
	setup()
}

export default App
