import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import Scene from '../components/scene/Scene'
import { ReactLenis } from '@studio-freight/react-lenis'
import '../styles/index.scss'
import Header from '../components/header'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Projects from '../components/ProjectsLayout'

import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ReactLenis root>
			<Suspense fallback={null}>
				<div className='hero-container'>
					<Header />
					<Hero />
					<Nav />
				</div>
				<div className='projects-container'>
					<Projects />
				</div>
				<div className='model'>
					<Scene />
				</div>
			</Suspense>
			<Analytics />
		</ReactLenis>
	</React.StrictMode>
)
