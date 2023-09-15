import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Project({ project }) {
	const [show, setShow] = useState(false) // Initially, not shown

	const snappy = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }
	const slower = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

	const handleClick = () => {
		setShow(!show)
	}

	return (
		<>
			<div className='container'>
				<div className='project'>
					<div>
						<h2>{project.title1}</h2>
						<div className={show ? 'image-container active' : 'image-container'}>
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={slower}
								onClick={handleClick}
								src={project.image}
								alt='project-image'
							/>
						</div>
						<h2>{project.title2}</h2>
					</div>
					<div>
						<p>{project.client}</p>
						<p>{project.type}</p>
						<p>{project.soft}</p>
					</div>
				</div>
			</div>
		</>
	)
}
