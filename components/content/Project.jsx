import Image from 'next/image'
import Link from 'next/link'

import { useRef } from 'react'

import { useAppContext } from '../context/ContextProvider'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/dist/gsap'

gsap.registerPlugin(useGSAP)

export default function Project({ project }) {
	const { isMobile } = useAppContext()

	const tl = useRef()

	const title1Ref = useRef()
	const imageContRef = useRef()
	const imageRef = useRef()
	const title2Ref = useRef()

	useGSAP(() => {
		const imagewidth = imageRef?.current?.width
		tl.current = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
		tl.current
			.to(
				title1Ref.current,
				{
					x: '-10%',
					duration: 1
				},
				'<'
			)
			.to(
				imageContRef.current,
				{
					width: imagewidth,
					borderRadius: '0.75rem',

					duration: 1
				},
				'<'
			)
			.to(
				imageRef.current,
				{
					scale: 1.2,
					duration: 2,
					ease: 'power3.out'
				},
				'<'
			)
			.to(
				title2Ref.current,
				{
					x: '10%',
					duration: 1
				},
				'<'
			)
	})
	const handleMouseEnter = () => {
		tl.current?.play()
	}

	const handleMouseLeave = () => {
		tl.current?.reverse()
	}

	return (
		<>
			<div className='container'>
				<div className='project'>
					<Link legacyBehavior href={project.pageUrl} passHref>
						<a target={project.newTab ? '_blank' : '_self'}>
							<div
								className='project_title'
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<div ref={title1Ref}>
									<h2>{project.title1}</h2>
								</div>
								{!isMobile && (
									<div ref={imageContRef} className='image-container'>
										<Image
											ref={imageRef}
											src={project.image}
											alt='project-image'
											width={1920}
											height={1080}
											quality={70}
										/>
									</div>
								)}
								<div ref={title2Ref}>
									<h2>{project.title2}</h2>
								</div>
							</div>
						</a>
					</Link>
					<div className='project_description'>
						<p>{project.client}</p>
						<p>{project.type}</p>
						<p>{project.soft}</p>
					</div>
				</div>
			</div>
		</>
	)
}
