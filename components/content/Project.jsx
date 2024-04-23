export default function Project({ project }) {
	return (
		<>
			<div className='container'>
				<div className='project'>
					<div>
						<div>
							<h2>{project.title1}</h2>
						</div>
						<div className='image-container'>
							<img src={project.image} alt='project-image' />
						</div>
						<div>
							<h2>{project.title2}</h2>
						</div>
					</div>
					<div>
						<div>
							<p>{project.client}</p>
						</div>
						<div>
							<p>{project.type}</p>
						</div>
						<div>
							<p>{project.soft}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
