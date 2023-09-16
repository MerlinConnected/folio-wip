import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function Project({ project }) {
	const snappy = { ease: [0.6, 0.01, -0.05, 0.9] }
	const slower = { ease: [0.43, 0.13, 0.23, 0.96] }
	const staggerDelay = 0.2

	const ref = useRef(null)

	const isInView = useInView(ref, { once: false })

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay
			}
		}
	}

	const subContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.1,
				staggerChildren: staggerDelay
			}
		}
	}

	const child = {
		hidden: { y: 100 },
		visible: { y: 0 }
	}

	return (
		<>
			<div className='container'>
				<div className='project'>
					<motion.div ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={container}>
						<div style={{ overflow: 'hidden' }}>
							<motion.h2 variants={child} transition={{ ...slower, duration: 0.6 }}>
								{project.title1}
							</motion.h2>
						</div>
						<div className='image-container'>
							<img src={project.image} alt='project-image' />
						</div>
						<div style={{ overflow: 'hidden' }}>
							<motion.h2 variants={child} transition={{ ...slower, duration: 0.6 }}>
								{project.title2}
							</motion.h2>
						</div>
					</motion.div>
					<motion.div ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={subContainer}>
						<div>
							<motion.p variants={child} transition={{ ...snappy, duration: 0.5 }}>
								{project.client}
							</motion.p>
						</div>
						<div>
							<motion.p variants={child} transition={{ ...snappy, duration: 0.5 }}>
								{project.type}
							</motion.p>
						</div>
						<div>
							<motion.p variants={child} transition={{ ...snappy, duration: 0.5 }}>
								{project.soft}
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	)
}
