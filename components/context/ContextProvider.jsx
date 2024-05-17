'use client'
import { createContext, useContext, useState, useEffect } from 'react'

let context = {}
const AppContext = createContext()

export const ContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 799)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const sharedState = {
		isMobile
	}

	context = {
		...sharedState
	}
	return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('useAppContext must be used within a AppProvider')
	}
	return context
}
