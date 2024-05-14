import Image from 'next/image'
import Link from 'next/link'

import { useAppContext } from '../context/ContextProvider'

export default function Project({ project }) {
	const { isMobile } = useAppContext()
	return (
		<>
			<div className='container'>
				<div className='project'>
					<div className='project_title'>
						<div>
							<Link href={project.pageUrl}>
								<h2>{project.title1}</h2>
							</Link>
						</div>
						{!isMobile && (
							<div className='image-container'>
								<Image
									src={project.image}
									alt='project-image'
									width={1920}
									height={1080}
									quality={70}
								/>
							</div>
						)}
						<div>
							<h2>{project.title2}</h2>
						</div>
					</div>
					<div className='project_description'>
						<p>{project.client}</p>
						<p>{project.type}</p>
						<p>{project.soft}</p>
					</div>
				</div>
			</div>
		</>
	)
}
