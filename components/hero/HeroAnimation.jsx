import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { heroAnim } from '../../utils/hero/anim'
import { useRef } from 'react'

const HeroAnimation = () => {
	const ref = useRef(null)

	const [scope, animate] = useAnimate()

	useEffect(() => {
		const animations = heroAnim

		animate(animations)
	})

	return scope
}

export default HeroAnimation
