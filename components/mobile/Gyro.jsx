import React, { useState, useEffect } from 'react'

const GyroExample = () => {
	const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 })
	const [permissionInfo, setPermissionInfo] = useState('Click to check permission')

	useEffect(() => {
		if ('DeviceOrientationEvent' in window) {
			checkDeviceOrientationPermission()
		}
	}, [])

	const checkDeviceOrientationPermission = async () => {
		if (typeof DeviceOrientationEvent.requestPermission === 'function') {
			try {
				const permission = await DeviceOrientationEvent.requestPermission()
				if (permission === 'granted') {
					startListening()
					setPermissionInfo('Permission granted. Data is being captured.')
				} else {
					setPermissionInfo('Permission not granted. Please enable it in settings.')
				}
			} catch (error) {
				console.error(error)
				setPermissionInfo('Error requesting permission.')
			}
		} else {
			// Auto-start if the permission request method is not required (non-iOS 13+ browsers)
			startListening()
			setPermissionInfo('Auto-started. If no data appears, enable permissions in browser settings.')
		}
	}

	const startListening = () => {
		window.addEventListener(
			'deviceorientation',
			(event) => {
				const { alpha, beta, gamma } = event
				setRotation({ alpha, beta, gamma })
			},
			true
		)
	}

	return (
		<div>
			<h1>Gyroscope Rotation</h1>
			<button onClick={checkDeviceOrientationPermission}>{permissionInfo}</button>
			<div>
				<p>Alpha: {rotation.alpha ? rotation.alpha.toFixed(2) : 'N/A'}</p>
				<p>Beta: {rotation.beta ? rotation.beta.toFixed(2) : 'N/A'}</p>
				<p>Gamma: {rotation.gamma ? rotation.gamma.toFixed(2) : 'N/A'}</p>
			</div>
		</div>
	)
}

export default GyroExample
