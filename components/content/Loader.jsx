import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/dist/gsap'
import { SplitText } from 'gsap/dist/SplitText'

import { useEffect, useRef } from 'react'

import { state } from '@/utils/store'
import { useSnapshot } from 'valtio'

gsap.registerPlugin(useGSAP, SplitText)

export default function LoaderScreen() {
	const snap = useSnapshot(state)
	const barRef = useRef()
	const loaderRef = useRef()

	useGSAP(() => {
		gsap.to(barRef.current, {
			width: '100%',
			duration: 1,
			ease: 'power3.inOut',
			delay: 1
		})
		gsap.to(barRef.current, {
			height: '100%',
			duration: 1,
			ease: 'power3.inOut',
			delay: 1.8
		})
		gsap.to(loaderRef.current, {
			scaleY: 0,
			duration: 1,
			ease: 'power3.inOut',
			delay: 2.5
		})
	})

	return (
		<div ref={loaderRef} className='loader'>
			<div ref={barRef} className='loader__bar'></div>
		</div>
	)
}
