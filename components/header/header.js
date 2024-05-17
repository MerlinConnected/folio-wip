import { useRef } from 'react'

import { state } from '@/utils/store'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/dist/gsap'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(useGSAP, SplitText)

export default function Header() {
	const text1Ref = useRef(null)
	const text2Ref = useRef(null)
	const starRef = useRef(null)

	useGSAP(() => {
		gsap.from(text1Ref.current, {
			yPercent: -100,
			delay: 0.5,
			duration: 1,
			ease: 'expo.out'
		})

		gsap.from(text2Ref.current, {
			yPercent: -100,
			delay: 0.5,
			duration: 1,
			ease: 'expo.out'
		})

		gsap.from(starRef.current, {
			yPercent: -100,
			rotate: 360,
			delay: 0.5,
			duration: 1,
			ease: 'expo.out'
		})
	})

	return (
		<header>
			<div style={{ overflow: 'hidden' }}>
				<p ref={text1Ref}>MERLIN</p>
			</div>
			<div style={{ overflow: 'hidden' }}>
				<svg
					ref={starRef}
					onClick={() => (state.debug = !state.debug)}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='none'
				>
					<path
						stroke='#fff'
						d='M8 0v16M0 8h16M1 4l13.856 8M4 14.928l8-13.856m-8 0 8 13.856M1 12l13.856-8'
					/>
				</svg>
			</div>
			<div style={{ overflow: 'hidden' }}>
				<p ref={text2Ref}>©2024</p>
			</div>
		</header>
	)
}
