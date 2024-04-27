import React, { Suspense } from 'react'

import { ReactLenis } from '@studio-freight/react-lenis'

import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<Suspense fallback={null}>
				<div>
					<main>{children}</main>
				</div>
			</Suspense>
			<Analytics />
		</ReactLenis>
	)
}
