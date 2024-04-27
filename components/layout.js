import React, { Suspense } from 'react'

import { ReactLenis } from '@studio-freight/react-lenis'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<Suspense fallback={null}>
				<div>
					<main>{children}</main>
				</div>
			</Suspense>
			<Analytics />
			<SpeedInsights />
		</ReactLenis>
	)
}
