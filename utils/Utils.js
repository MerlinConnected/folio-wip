import { stagger } from 'framer-motion'

const transition = (duration, at, delay) => {
	const value = {
		type: 'tween',
		ease: [0.265, 0.84, 0.44, 1],
		duration: duration,
		at: at,
		delay: stagger(delay)
	}

	return value
}

export { transition }
