import { useEffect } from 'react'
import HeroAnimation from './HeroAnimation'

export default function hero() {
	useEffect(() => {
		const handleScroll = () => {
			const title = document.querySelector('.hero')
			title.style.transform = `translateY(-${window.scrollY / 2}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scope = HeroAnimation()

	return (
		<section className='hero' ref={scope}>
			<h1>
				<div>
					<span>3D </span>
					<span className='ft-alt-it'>Artist.</span>
				</div>
				<div>
					<span>Creative </span>
					<span className='ft-alt-it'>developer.</span>
				</div>
				<div>
					<span>I </span>
					<span className='ft-alt'>mix</span>
					<span className='ft-alt-it'>both</span>
					<span>and make </span>
					<span className='ft-alt-it'>stuff.</span>
				</div>
				<div>
					<span>Bordeaux</span>
					<span>{'->'}</span>
					<span>Paris</span>
				</div>
			</h1>
		</section>
	)
}
