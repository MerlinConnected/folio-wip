import Image from 'next/image'
import { useAppContext } from '../context/ContextProvider'

export default function Project({ project }) {
	const { isMobile } = useAppContext()
	console.log(isMobile)
	return (
		<>
			<div className='container'>
				<div className='project'>
					<div className='project_title'>
						<div>
							<h2>{project.title1}</h2>
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
					{/* <div className='project_description'>
						<p>{project.client}</p>
						<p>{project.type}</p>
						<p>{project.soft}</p>
					</div> */}
				</div>
			</div>
		</>
	)
}
