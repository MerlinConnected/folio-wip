import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RigidBody, BallCollider } from '@react-three/rapier'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Pointer({ initialPosition = { x: 0, y: 0, z: 0 } }) {
	const ref = useRef()
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePosition({
				x: event.clientX - window.innerWidth / 2,
				y: event.clientY - window.innerHeight / 2
			})
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	useFrame(() => {
		const position = {
			x: mousePosition.x / 77,
			y: -mousePosition.y / 77,
			z: 0
		}

		ref.current?.setNextKinematicTranslation(position)
	})

	return (
		<RigidBody position={[0, 0, 0]} type='kinematicPosition' colliders={false} ref={ref}>
			<BallCollider args={[1]} scale={2} />
		</RigidBody>
	)
}
