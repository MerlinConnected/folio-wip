import { useEffect, useRef, useState } from 'react'

import { useAppContext } from '../context/ContextProvider'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/dist/gsap'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(useGSAP, SplitText)

export default function Hero() {
	const { isMobile } = useAppContext()

	const titleSectionRef = useRef()
	const titleRef = useRef()

	useGSAP(() => {
		const split = new SplitText(titleRef.current, { type: 'lines' })
		gsap.from(split.lines, {
			yPercent: 100,
			opacity: 0,
			delay: 0.3,
			stagger: 0.1,
			duration: 1,
			ease: 'power3.out'
		})

		gsap.to(titleSectionRef.current, {
			y: 0,
			delay: 0.2,
			duration: 2,
			ease: 'expo.out'
		})
	})

	// useEffect(() => {
	// 	if (!isMobile) {
	// 		if (titleRef.current) {
	// 			const split = new SplitText(titleRef.current, { type: 'chars' })
	// 			split.chars.forEach((char) => {
	// 				gsap.set(char, { '--weight': '74' })
	// 				char.addEventListener('mouseenter', handleHover.bind(null, char, split.chars))
	// 				char.addEventListener('mouseleave', handleMouseLeave.bind(null, char, split.chars))

	// 				return () => {
	// 					char.removeEventListener('mouseenter', handleHover)
	// 					char.removeEventListener('mouseleave', handleMouseLeave)
	// 				}
	// 			})
	// 		}
	// 	}
	// }, [isMobile])

	// const handleHover = (target, chars) => {
	// 	const targetIndex = chars.indexOf(target)
	// 	const strength = 2

	// 	chars.forEach((char, index) => {
	// 		const distance = Math.abs(index - targetIndex)
	// 		const scaleFactor = 1 / (distance + 1)
	// 		const newWeight = 74 + (218 - 74) * scaleFactor * strength

	// 		gsap.to(char, { '--weight': newWeight, duration: 0.2 })
	// 	})
	// }

	// const handleMouseLeave = (target, chars) => {
	// 	chars.forEach((char) => {
	// 		gsap.to(char, { '--weight': '74', duration: 0.2 })
	// 	})
	// }
	useEffect(() => {
		const handleScroll = () => {
			titleSectionRef.current.style.transform = `translateY(-${
				window.scrollY / 2
			}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section ref={titleSectionRef} className='hero'>
			<h1 ref={titleRef}>
				3D Artist. <br /> Creative developer. <br /> I mix both and do artsy
				stuff. <br /> Bordeaux & Paris
			</h1>
		</section>
	)
}
