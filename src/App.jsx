import * as THREE from 'three';
import {
	Canvas,
	useFrame,
	useThree
} from '@react-three/fiber';
import { Physics, useSphere } from '@react-three/cannon';
import { AsciiRenderer } from '@react-three/drei';

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);
const baubleMaterial = new THREE.MeshStandardMaterial({
	color: 'green',
	roughness: 1
});

export const App = () => (
	<Canvas
		shadows
		dpr={[1, 2]}
		camera={{
			position: [0, 0, 20],
			fov: 35,
			near: 1,
			far: 40
		}}
	>
		<color attach='background' args={['black']} />
		<directionalLight
			intensity={0.3}
			position={[-10, -10, 5]}
		/>
		<directionalLight
			intensity={4}
			position={[10, 10, 10]}
		/>
		<Physics gravity={[0, 2, 0]} iterations={10}>
			<Pointer />
			<Clump />
		</Physics>
		<AsciiRenderer bgColor='black' fgColor='white' />
	</Canvas>
);

function Clump({
	mat = new THREE.Matrix4(),
	vec = new THREE.Vector3(),
	...props
}) {
	const [ref, api] = useSphere(() => ({
		// Créer une sphère
		args: [1], // Rayon de la sphère
		mass: 1,
		angularDamping: 0.1,
		linearDamping: 0.65,
		position: [rfs(20), rfs(20), rfs(20)] // Position initiale de la sphère (aléatoire grace à rfs)
	}));
	useFrame((state) => {
		// Utiliser le hook `useFrame` pour mettre à jour la position des sphères à chaque image
		for (let i = 0; i < 10; i++) {
			ref.current.getMatrixAt(i, mat); // Obtenir la matrice de transformation actuelle pour la sphère
			// Normaliser la position et multiplier par une force négative pour diriger la sphère vers le centre
			api
				.at(i) // Sélectionne la sphère actuelle
				.applyForce(
					vec // Vecteur utilisé pour stocker la position de la sphère
						.setFromMatrixPosition(mat) // Obtenir la position actuelle de la sphère
						.normalize() // Normaliser la position
						.multiplyScalar(-40) // Multiplier par une force négative
						.toArray(), // Convertir le vecteur en un tableau
					[0, 0, 0] // Point d'application de la force (Point d'origine de la sphère)
				);
		}
	});
	return (
		<instancedMesh
			ref={ref}
			castShadow
			receiveShadow
			args={[null, null, 10]}
			geometry={sphereGeometry}
			material={baubleMaterial}
		/>
	);
}

function Pointer() {
	const viewport = useThree((state) => state.viewport);
	const [, api] = useSphere(() => ({
		type: 'Kinematic',
		args: [3],
		position: [0, 0, 0]
	}));
	return useFrame((state) =>
		api.position.set(
			(state.mouse.x * viewport.width) / 2,
			(state.mouse.y * viewport.height) / 2,
			0
		)
	);
}
