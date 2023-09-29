import Head from 'next/head'

import Hero from '../components/hero/Hero'
import Header from '../components/header/Header.jsx'
import Projects from '../components/content/ProjectsLayout.jsx'
import Nav from '../components/nav/Nav.jsx'
import Scene from '../components/scene/Scene.jsx'

export default function Home() {
	return (
		<>
			<Head>
				<title>Gaëtan Jestin | Folio</title>
				<meta name='description' content='To be written.' />
			</Head>

			<div className='hero-container'>
				<Header />
				<Hero />
				<Nav />
			</div>
			{/* <div className='projects-container'>
				<Projects />
			</div> */}
			<div className='model'>
				<Scene />
			</div>
		</>
	)
}
