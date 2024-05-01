'use client'
import { createContext, useContext } from 'react'

import { useMediaQuery } from 'react-responsive'

let context = {}
const AppContext = createContext()

export const ContextProvider = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 799 })

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
