import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import App from './App'
import '../styles/index.scss'
import Header from '../components/header/header'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={null}>
			<App />
			<div>
				<Header />
			</div>
		</Suspense>
	</React.StrictMode>
)
