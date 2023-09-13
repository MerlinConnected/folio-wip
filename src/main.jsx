import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import App from './App'
import '../styles/index.scss'
import Header from '../components/header'
import Hero from '../components/hero'
import Nav from '../components/nav'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={null}>
			<App />
			<div>
				<div className='hero-container'>
					<Header />
					<Hero />
					<Nav />
				</div>
			</div>
		</Suspense>
	</React.StrictMode>
)
