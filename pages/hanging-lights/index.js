import { useRef, useState } from 'react'

import { projects } from '@/utils/projects'

import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/dist/SplitText'
import { gsap } from 'gsap/dist/gsap'
import Link from 'next/link'

gsap.registerPlugin(useGSAP, SplitText)

export default function Subway() {
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
			stagger: 0.1,
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
					stagger: 0.1
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
					src='/images/hanging-lights.png'
					alt='Light bulbs handing by their wires from the ceiling'
				/>
				<div ref={overlayRef}></div>
			</div>
			<div className='title-container'>
				<div className='content'>
					<h1 ref={titleRef}>Hanging Lights</h1>
					<div ref={detailRef} className='details'>
						<p>{projects[0].year}</p>
						<p>{projects[0].client}</p>
						<p>{projects[0].type}</p>
						<p>{projects[0].soft}</p>
					</div>
					<p ref={hideRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						Hide ui
					</p>
					<Link ref={homeRef} href='/'>
						Back to home
					</Link>
				</div>
			</div>
		</section>
	)
}
