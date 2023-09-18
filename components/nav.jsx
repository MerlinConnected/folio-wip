import React, { useState } from 'react'

import { motion } from 'framer-motion'

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

	const slower = { ease: [0.43, 0.13, 0.23, 0.96] }

	return (
		<nav>
			<div style={{ overflow: 'hidden' }}>
				<motion.a
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ ...slower, duration: 0.6, delay: '0.8' }}
					href='https://github.com/MerlinConnected'
					target='_blank'
					onMouseEnter={handleGithubHover}
					onMouseLeave={handleMouseLeave}
				>
					{githubText}
				</motion.a>
			</div>
			<div style={{ overflow: 'hidden' }}>
				<motion.a
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ ...slower, duration: 0.6, delay: '1' }}
					href='https://www.linkedin.com/in/gaetan-jestin/'
					target='_blank'
					onMouseEnter={handleLinkedinHover}
					onMouseLeave={handleMouseLeave}
				>
					{linkedinText}
				</motion.a>
			</div>
		</nav>
	)
}
