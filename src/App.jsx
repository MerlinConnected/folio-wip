import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, useSphere } from '@react-three/cannon'
import { AsciiRenderer } from '@react-three/drei'

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 12, 12)

export default function App() {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			camera={{
				position: [0, 0, 20],
				fov: 35,
				near: 1,
				far: 40,
			}}
		>
			<color attach='background' args={['black']} />
			<directionalLight intensity={0.3} position={[-10, -10, 5]} />
			<directionalLight intensity={4} position={[10, 10, 10]} />
			<Physics gravity={[0, 2, 0]}>
				<Pointer />
				<Clump />
			</Physics>
			<AsciiRenderer bgColor='black' fgColor='white' characters=' .+=@' />
		</Canvas>
	)
}

function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3() }) {
	const [ref, api] = useSphere(() => ({
		args: [1],
		mass: 1,
		angularDamping: 0.1,
		linearDamping: 0.65,
		position: [rfs(20), rfs(20), rfs(20)],
	}))
	useFrame((state) => {
		for (let i = 0; i < 10; i++) {
			ref.current.getMatrixAt(i, mat) // Obtenir la matrice de transformation actuelle pour la sphère
			// Normaliser la position et multiplier par une force négative pour diriger la sphère vers le centre
			api
				.at(i) // Sélectionne la sphère actuelle
				.applyForce(
					vec
						.setFromMatrixPosition(mat) // Obtenir la position actuelle de la sphère
						.normalize()
						.multiplyScalar(-40) // Multiplier par une force négative
						.toArray(),
					[0, 0, 0] // Point d'application de la force (Point d'origine de la sphère)
				)
		}
	})
	return (
		<instancedMesh
			ref={ref}
			castShadow
			receiveShadow
			args={[null, null, 10]}
			geometry={sphereGeometry}
		>
			<meshStandardMaterial color='white' />
		</instancedMesh>
	)
}

function Pointer() {
	const viewport = useThree((state) => state.viewport)
	const [, api] = useSphere(() => ({
		type: 'Kinematic',
		args: [3],
		position: [0, 0, 0],
	}))
	return useFrame((state) =>
		api.position.set(
			(state.mouse.x * viewport.width) / 2,
			(state.mouse.y * viewport.height) / 2,
			0
		)
	)
}
