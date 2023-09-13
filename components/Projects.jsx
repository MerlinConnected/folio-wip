import Project from './Project'

import { photorealSubway, hangingLights } from '../utils/projects'

export default function Projects() {
	return (
		<section className='projects'>
			<p>
				Projects<sup>2</sup>
			</p>
			<Project article={photorealSubway} />
			<Project article={hangingLights} />
		</section>
	)
}
