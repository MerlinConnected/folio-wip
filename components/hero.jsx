import { useEffect } from 'react'

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
	return (
		<section className='hero'>
			<div>
				<h1>
					3D <span className='ft-alt-it'>Artist</span>. <br />
					Creative <span className='ft-alt-it'>developer</span>.
					<br />I <span className='ft-alt'>mix</span> <span className='ft-alt-it'>both</span> and make{' '}
					<span className='ft-alt-it'>stuff</span>.
					<br />
					<div>
						Paris <span className='ft-alt'> &</span> <span className='ft-alt-it'> Bordeaux</span>
					</div>
				</h1>
			</div>
		</section>
	)
}
