import { useRef, useState } from 'react'

import { projects } from '@/utils/projects'

import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/dist/SplitText'
import { gsap } from 'gsap/dist/gsap'

import Link from 'next/link'

gsap.registerPlugin(useGSAP, SplitText)

export default function Page() {
	const titleRef = useRef()
	const imgRef = useRef()
	const detailRef = useRef()
	const hideRef = useRef()
	const homeRef = useRef()
	const overlayRef = useRef()

	const tl = useRef()

	useGSAP(() => {
		const split = new SplitText(titleRef.current, { type: 'words' })

		gsap.set(titleRef.current, { overflow: 'hidden', padding: '1rem 0' })

		gsap.from(split.words, {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			stagger: 0.1,
			ease: 'power3.out'
		})

		gsap.to(imgRef.current, {
			scale: 1.05,
			duration: 2,
			ease: 'power3.out'
		})

		gsap.from(detailRef.current.querySelectorAll('p'), {
			opacity: 0,
			stagger: 0.05,
			delay: 0.5,
			duration: 0.5,
			ease: 'power3.out'
		})

		gsap.from(hideRef.current, {
			opacity: 0,
			duration: 0.5,
			delay: 1,
			ease: 'power3.out'
		})

		gsap.from(homeRef.current, {
			opacity: 0,
			duration: 0.5,
			delay: 1.2,
			ease: 'power3.out'
		})

		tl.current = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } })

		tl.current
			.to(
				split.words,
				{
					opacity: 0,
					yPercent: 100,
					duration: 1,
					stagger: 0.1
				},
				'<'
			)
			.to(
				imgRef.current,
				{
					scale: 1,
					duration: 1
				},
				'<'
			)
			.to(
				detailRef.current.querySelectorAll('p'),
				{
					opacity: 0,
					duration: 0.5,
					stagger: 0.05
				},
				'<'
			)
			.to(
				overlayRef.current,
				{
					opacity: 0,
					duration: 0.5
				},
				0.4
			)
			.to(
				hideRef.current,
				{
					opacity: 0,
					duration: 0.5
				},
				0.4
			)
			.to(
				homeRef.current,
				{
					opacity: 0,
					duration: 0.5
				},
				0.5
			)
	})

	const handleMouseEnter = () => {
		tl.current?.play()
	}

	const handleMouseLeave = () => {
		tl.current?.reverse()
	}
	return (
		<section className='project-details'>
			<div className='image-container'>
				<img ref={imgRef} src='/images/albd-scene.jpeg' alt='Helmet Configurator' />
				<div ref={overlayRef}></div>
			</div>
			<div className='title-container'>
				<div className='content'>
					<h1 ref={titleRef}>{projects[7].title1 + ' ' + projects[7].title2}</h1>
					<div ref={detailRef} className='details'>
						<div>
							<p>
								<strong>Year</strong>
							</p>
							<p>{projects[7].year}</p>
						</div>
						<div>
							<p>
								<strong>Client</strong>
							</p>
							<p>{projects[7].client}</p>
						</div>
						<div>
							<p>
								<strong>Made w/</strong>
							</p>
							<p>{projects[7].softs}</p>
						</div>
						<div>
							<p>
								<strong>Roles</strong>
							</p>
							<p>{projects[7].roles}</p>
						</div>
					</div>
					{projects[7].websiteURL ? (
						<Link
							ref={hideRef}
							href={projects[7].websiteURL}
							target='_blank'
							rel='noopener noreferrer'
						>
							Visit website
						</Link>
					) : (
						<p ref={hideRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							Hide ui
						</p>
					)}
					<Link ref={homeRef} href='/'>
						Back to home
					</Link>
				</div>
			</div>
		</section>
	)
}
