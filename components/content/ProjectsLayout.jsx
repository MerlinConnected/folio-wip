import Project from './Project'

import { projects } from '@/utils/projects'

export default function Projects() {
	return (
		<section className='projects'>
			<div>
				<p>
					Projects<sup>{projects.length}</sup>
				</p>
			</div>
			<div>
				{projects.map((project, index) => (
					<Project project={project} key={index} />
				))}
			</div>
		</section>
	)
}
