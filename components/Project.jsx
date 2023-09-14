import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Project({ project }) {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}
	return (
		<div className='container'>
			<div className='project'>
				<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<h2>{project.title1}</h2>
					<AnimatePresence>
						{isHovered && (
							<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
								<img src={project.image} alt='project-image' />
							</motion.div>
						)}
					</AnimatePresence>
					<h2>{project.title2}</h2>
				</div>
				<div>
					<p>{project.client}</p>
					<p>{project.type}</p>
					<p>{project.soft}</p>
				</div>
			</div>
		</div>
	)
}
