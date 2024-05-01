import React, { Suspense } from 'react'

import { ReactLenis } from '@studio-freight/react-lenis'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { ContextProvider } from '@/components/context/ContextProvider'

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<Suspense fallback={null}>
				<div>
					<ContextProvider>
						<main>{children}</main>
					</ContextProvider>
				</div>
			</Suspense>
			<Analytics />
			<SpeedInsights />
		</ReactLenis>
	)
}
