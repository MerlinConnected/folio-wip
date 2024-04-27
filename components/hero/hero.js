import { useEffect, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/dist/gsap'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(useGSAP, SplitText)

export default function Hero() {
	const titleSectionRef = useRef()
	const titleRef = useRef()

	useGSAP(() => {
		const split = new SplitText(titleRef.current, { type: 'lines' })
		gsap.from(split.lines, {
			yPercent: 100,
			opacity: 0,
			delay: 3.3,
			stagger: 0.1,
			duration: 1,
			ease: 'power3.out'
		})

		gsap.to(titleSectionRef.current, {
			y: 0,
			delay: 3.2,
			duration: 2,
			ease: 'expo.out'
		})
	})

	useEffect(() => {
		const handleScroll = () => {
			titleSectionRef.current.style.transform = `translateY(-${window.scrollY / 2}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section ref={titleSectionRef} className='hero'>
			<h1 ref={titleRef}>
				3D Artist. <br /> Creative developer. <br /> I mix both and do artsy stuff. <br /> Bordeaux
				& Paris
			</h1>
		</section>
	)
}
