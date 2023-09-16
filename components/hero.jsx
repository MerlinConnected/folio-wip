import { useEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function hero() {
	useEffect(() => {
		const handleScroll = () => {
			const title = document.querySelector('.hero')
			title.style.transform = `translateY(-${window.scrollY / 2}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const snappy = { ease: [0.6, 0.01, -0.05, 0.9] }
	const slower = { ease: [0.43, 0.13, 0.23, 0.96] }

	const ref = useRef(null)

	const isInView = useInView(ref, { once: false })

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	}

	const child = {
		hidden: { y: 100 },
		visible: { y: 0 }
	}
	return (
		<section className='hero'>
			<motion.div ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={container}>
				<div style={{ overflow: 'hidden' }}>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }}>
						<h1>3D</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }} className='ft-alt-it'>
						<h1>
							<span className='ft-alt-it'>Artist.</span>
						</h1>
					</motion.div>
				</div>
				<div style={{ overflow: 'hidden' }}>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }}>
						<h1>Creative</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }} className='ft-alt-it'>
						<h1>
							<span className='ft-alt-it'>developer.</span>
						</h1>
					</motion.div>
				</div>
				<div style={{ overflow: 'hidden' }}>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }}>
						<h1>I</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }} className='ft-alt'>
						<h1>
							<span className='ft-alt'>mix</span>
						</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }} className='ft-alt-it'>
						<h1>
							<span className='ft-alt-it'>both</span>
						</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }}>
						<h1>and make</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }} className='ft-alt-it'>
						<h1>
							<span className='ft-alt-it'>stuff.</span>
						</h1>
					</motion.div>
				</div>
				<div style={{ overflow: 'hidden' }}>
					<motion.div variants={child} transition={{ ...slower, duration: 1 }}>
						<h1>Paris</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 0.8 }} className='ft-alt'>
						<h1>
							<span className='ft-alt'>&</span>
						</h1>
					</motion.div>
					<motion.div variants={child} transition={{ ...slower, duration: 1 }} className='ft-alt-it'>
						<h1>
							<span className='ft-alt-it'>Bordeaux</span>
						</h1>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}
