import { useEffect } from 'react'

export default function Hero() {
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

	return (
		<section className='hero'>
			<h1>
				<span>3D Artist.</span>
				<span>Creative developer.</span>
				<span>I mix both and make stuff.</span>
				<span>
					<span>Bordeaux</span> & <span>Paris</span>
				</span>
			</h1>
		</section>
	)
}
