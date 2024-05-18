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

		gsap.from(detailRef.current.querySelectorAll('p, a'), {
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
				detailRef.current.querySelectorAll('p, a'),
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
				<img
					ref={imgRef}
					src='/images/web-experiments.png'
					alt='Abtrsreact render of colorfull spheres'
				/>
				<div ref={overlayRef}></div>
			</div>
			<div className='title-container'>
				<div className='content'>
					<h1 ref={titleRef}>{projects[5].title1 + ' ' + projects[5].title2}</h1>
					<div ref={detailRef} className='details'>
						<div>
							<p>
								<strong>React Three Peaches</strong>
							</p>
							<Link
								href={'https://react-three-peaches.vercel.app/'}
								target='_blank'
								rel='noopener noreferrer'
							>
								Visit website
							</Link>
						</div>
						<div>
							<p>
								<strong>Thanks Nathan Smith</strong>
							</p>
							<Link
								href={'https://thanks-nathan-smith.vercel.app/'}
								target='_blank'
								rel='noopener noreferrer'
							>
								Visit website
							</Link>
						</div>
						<div>
							<p>
								<strong>Shader Study</strong>
							</p>
							<Link
								href={'https://r3f-shaders-study.vercel.app/'}
								target='_blank'
								rel='noopener noreferrer'
							>
								Visit website
							</Link>
						</div>
						<div>
							<p>
								<strong>Pixelated Effect</strong>
							</p>
							<Link
								href={'https://text-reveal-js.vercel.app/'}
								target='_blank'
								rel='noopener noreferrer'
							>
								Visite website
							</Link>
						</div>
					</div>
					<Link ref={homeRef} href='/'>
						Back to home
					</Link>
				</div>
			</div>
		</section>
	)
}
