import Header from './header/header'
import React, { Suspense } from 'react'

import { ReactLenis } from '@studio-freight/react-lenis'

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<Suspense fallback={null}>
				<div>
					<main>{children}</main>
				</div>
			</Suspense>
		</ReactLenis>
	)
}
