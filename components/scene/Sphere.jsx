import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier'
import { RoundedBox } from '@react-three/drei'

function randFloatSpread(range) {
	return range * (0.5 - Math.random())
}

export default function Sphere({ vec = new THREE.Vector3(), scale, r = randFloatSpread }) {
	const ref = useRef()

	useFrame((_state, delta) => {
		delta = Math.min(0.1, delta)

		if (ref.current) {
			ref.current.applyImpulse(
				vec
					.copy(ref.current.translation())
					.normalize()
					.multiply({ x: -30 * delta, y: -30 * delta, z: -30 * delta })
			)

			ref.current.applyImpulse(
				vec
					.copy(ref.current.rotation())
					.normalize()
					.multiply({ x: -25 * delta, y: -25 * delta, z: -25 * delta })
			)
		}
	})

	return (
		<RigidBody
			ref={ref}
			linearDamping={1}
			angularDamping={0.15}
			friction={0.2}
			position={[r(20), r(20) + 20, r(20) - 5]}
			colliders={false}
			dispose={null}
		>
			<BallCollider args={[scale]} />
			<mesh>
				<sphereGeometry args={[scale, 12, 12]} />
				<meshStandardMaterial color='white' />
			</mesh>
		</RigidBody>
	)
}
