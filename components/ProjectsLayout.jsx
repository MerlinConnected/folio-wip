import Project from './Project'

import { photorealSubway, hangingLights } from '../utils/projects'

export default function Projects() {
	return (
		<section className='projects'>
			<div>
				<p>
					Projects<sup>2</sup>
				</p>
			</div>
			<div>
				<Project project={hangingLights} />
				<Project project={photorealSubway} />
			</div>
		</section>
	)
}
