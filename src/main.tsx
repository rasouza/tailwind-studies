import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import { Provider } from './provider.tsx'
import '@/styles/globals.css'

// biome-ignore lint/style/noNonNullAssertion: React boilerplate
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
)
