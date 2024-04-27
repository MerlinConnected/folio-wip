import React, { useEffect } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { AsciiRenderer, useProgress } from '@react-three/drei'

import { Perf } from 'r3f-perf'

import Pointer from './Pointer'
import Sphere from './Sphere'

import { state } from '@/utils/store'
import { useSnapshot } from 'valtio'

const spheres = [...Array(10)].map(() => ({ scale: [0.9, 1, 1.1][Math.floor(Math.random() * 3)] }))

export default function Scene() {
	const snap = useSnapshot(state)

	useEffect(() => {
		const handleScroll = () => {
			const title = document.querySelector('.model')
			title.style.transform = `translateY(-${window.scrollY / 3}px)`
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Canvas
				shadows
				gl={{ alpha: true }}
				dpr={[0.2, 0.4]}
				camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
			>
				<color attach='background' args={['black']} />

				<directionalLight intensity={0.3} position={[-10, -10, 5]} />
				<directionalLight intensity={4} position={[10, 10, 10]} />

				<PhysicsDebug />

				<Ascii />
			</Canvas>
		</>
	)
}

function Ascii() {
	const snap = useSnapshot(state)
	return state.debug ? null : (
		<AsciiRenderer bgColor='transparent' fgColor='white' characters=' .+=@' />
	)
}

function PhysicsDebug() {
	const snap = useSnapshot(state)
	return state.debug ? (
		<>
			<Physics debug gravity={[0, 0, 0]}>
				<Pointer />

				{spheres.map((props, i) => (
					<Sphere key={i} {...props} />
				))}
			</Physics>
			<Perf />
		</>
	) : (
		<Physics gravity={[0, 0, 0]}>
			<Pointer />
			{spheres.map((props, i) => (
				<Sphere key={i} {...props} />
			))}
		</Physics>
	)
}
