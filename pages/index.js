import { useState, useEffect } from 'react'

import Head from 'next/head'

import Hero from '@/components/hero/hero'
import Header from '@/components/header/header'
import Projects from '@/components/content/ProjectsLayout'
import Nav from '@/components/nav/nav'
import Scene from '@/components/scene/Scene'
import LoaderScreen from '@/components/content/Loader'

export default function Home() {
	const [isFirstVisit, setIsFirstVisit] = useState(true)

	useEffect(() => {
		const hasVisited = localStorage.getItem('hasVisited')
		if (hasVisited) {
			setIsFirstVisit(false)
		} else {
			localStorage.setItem('hasVisited', 'true')
		}
	}, [])
	return (
		<>
			<Head>
				<title>Gaëtan Jestin | Folio</title>
				<meta name='description' content='To be written.' />
			</Head>

			{isFirstVisit && <LoaderScreen />}

			<div className='hero-container'>
				<Header />
				<Hero />
				<Nav />
			</div>

			<div className='projects-container'>
				<Projects />
			</div>

			{/* <div className='model'>
				<Scene />
			</div> */}
		</>
	)
}
