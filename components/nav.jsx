import React, { useState } from 'react'

export default function Nav() {
	const githubLinks = ['G1THU8', 'G1THUB', 'GITHU8', 'G!THUB', 'G!THU8', 'GITHUß', 'G!THUß', 'G1THUß']
	const linkedinLinks = ['L1NK3D1N', 'L1NKED1N', 'L!NK3D1N', 'L!NKED1N', 'L1NK3D!N', 'L!NK3D!N', 'L!NKED!N', 'L1NKED!N']

	const [githubText, setGithubText] = useState('-> GITHUB')
	const [linkedinText, setLinkedinText] = useState('-> LINKEDIN')

	const handleGithubHover = () => {
		const randomIndex = Math.floor(Math.random() * githubLinks.length)
		setGithubText(`-> ${githubLinks[randomIndex]}`)
	}

	const handleLinkedinHover = () => {
		const randomIndex = Math.floor(Math.random() * linkedinLinks.length)
		setLinkedinText(`-> ${linkedinLinks[randomIndex]}`)
	}

	const handleMouseLeave = () => {
		setGithubText('-> GITHUB')
		setLinkedinText('-> LINKEDIN')
	}

	return (
		<nav>
			<a
				href='https://github.com/MerlinConnected'
				target='_blank'
				onMouseEnter={handleGithubHover}
				onMouseLeave={handleMouseLeave}
			>
				{githubText}
			</a>
			<a
				href='https://www.linkedin.com/in/gaetan-jestin/'
				target='_blank'
				onMouseEnter={handleLinkedinHover}
				onMouseLeave={handleMouseLeave}
			>
				{linkedinText}
			</a>
		</nav>
	)
}
