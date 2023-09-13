import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { AsciiRenderer } from '@react-three/drei'
import Pointer from './Pointer'
import Sphere from './Sphere'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'

const spheres = [...Array(10)].map(() => ({ scale: [0.9, 1, 1.1][Math.floor(Math.random() * 3)] }))

export default function Scene() {
	useEffect(() => {
		const handleScroll = () => {
			const title = document.querySelector('.model')
			title.style.transform = `translateY(-${window.scrollY / 1}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<Canvas
			shadows
			gl={{ alpha: true, stencil: false, depth: false, antialias: true, powerPreference: 'high-performance' }}
			camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
		>
			<color attach='background' args={['black']} />

			<directionalLight intensity={0.3} position={[-10, -10, 5]} />
			<directionalLight intensity={4} position={[10, 10, 10]} />

			<Physics gravity={[0, 0, 0]}>
				<Pointer />

				{spheres.map((props, i) => (
					<Sphere key={i} {...props} />
				))}
			</Physics>
			{/* <Perf /> */}
			<AsciiRenderer bgColor='black' fgColor='white' characters=' .+=@' />
		</Canvas>
	)
}
