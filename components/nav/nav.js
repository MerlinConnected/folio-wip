import React, { useState, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/dist/gsap'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(useGSAP, SplitText)

export default function Nav() {
	const githubLinks = [
		'G1THU8',
		'G1THUB',
		'GITHU8',
		'G!THUB',
		'G!THU8',
		'GITHUß',
		'G!THUß',
		'G1THUß'
	]
	const linkedinLinks = [
		'L1NK3D1N',
		'L1NKED1N',
		'L!NK3D1N',
		'L!NKED1N',
		'L1NK3D!N',
		'L!NK3D!N',
		'L!NKED!N',
		'L1NKED!N'
	]

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

	// ANIMATION

	const text1Ref = useRef(null)
	const text2Ref = useRef(null)

	useGSAP(() => {
		gsap.from(text1Ref.current, {
			yPercent: 100,
			delay: 0.5,
			// stagger: 0.05,
			duration: 1,
			ease: 'expo.out'
		})

		gsap.from(text2Ref.current, {
			yPercent: 100,
			delay: 0.5,
			// stagger: 0.05,
			duration: 1,
			ease: 'expo.out'
		})
	})

	return (
		<nav>
			<div style={{ overflow: 'hidden' }}>
				<a
					ref={text1Ref}
					href='https://github.com/MerlinConnected'
					target='_blank'
					onMouseEnter={handleGithubHover}
					onMouseLeave={handleMouseLeave}
				>
					{githubText}
				</a>
			</div>
			<div style={{ overflow: 'hidden' }}>
				<a
					ref={text2Ref}
					href='https://www.linkedin.com/in/gaetan-jestin/'
					target='_blank'
					onMouseEnter={handleLinkedinHover}
					onMouseLeave={handleMouseLeave}
				>
					{linkedinText}
				</a>
			</div>
		</nav>
	)
}
