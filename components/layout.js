import React, { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react';

import { ReactLenis } from '@studio-freight/react-lenis'

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<Suspense fallback={null}>
				<div>
					<main>
						{children}
						<Analytics />
					</main>
				</div>
			</Suspense>
		</ReactLenis>
	)
}
