import { projects } from '@/utils/projects'

export default function Subway() {
	console.log(projects[0].title1)
	return (
		<section className='project-details'>
			<img
				src='/images/hanging-lights.png'
				alt='Light bulbs handing by their wires from the ceiling'
				className='project-image'
			/>
			<div className='gradient-overlay'></div>
			<div className='title-container'>
				<div className='content'>
					<h1>Hanging Lights</h1>
					<div className='details'>
						<p>{projects[0].year}</p>
						<p>{projects[0].client}</p>
						<p>{projects[0].type}</p>
						<p>{projects[0].soft}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
