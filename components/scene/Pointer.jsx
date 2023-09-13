import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier'

export default function Pointer({ initialPosition = { x: 0, y: 0, z: 0 } }) {
	const ref = useRef()
	const position = { x: initialPosition.x, y: initialPosition.y, z: initialPosition.z }

	useFrame(({ mouse, viewport }) => {
		position.x = (mouse.x * viewport.width) / 2
		position.y = (mouse.y * viewport.height) / 2
		position.z = 0

		ref.current?.setNextKinematicTranslation(position)
	})

	return (
		<RigidBody position={[0, 0, 0]} type='kinematicPosition' colliders={false} ref={ref}>
			<BallCollider args={[1]} scale={2} />
		</RigidBody>
	)
}
