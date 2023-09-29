import { state } from '../../utils/store'
import { useSnapshot } from 'valtio'

import { motion } from 'framer-motion'

export default function Header() {
	const snap = useSnapshot(state)
	console.log(state.debug)

	const slower = { ease: [0.43, 0.13, 0.23, 0.96] }

	return (
		<header>
			<div style={{ overflow: 'hidden' }}>
				<motion.p initial={{ y: 100 }} animate={{ y: 0 }} transition={{ ...slower, duration: 0.6 }}>
					MERLIN
				</motion.p>
			</div>
			<div style={{ overflow: 'hidden' }}>
				<motion.svg
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{ ...slower, duration: 0.6, delay: '0.2' }}
					onClick={() => (state.debug = !state.debug)}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='none'
				>
					<path stroke='#fff' d='M8 0v16M0 8h16M1 4l13.856 8M4 14.928l8-13.856m-8 0 8 13.856M1 12l13.856-8' />
				</motion.svg>
			</div>
			<div style={{ overflow: 'hidden' }}>
				<motion.p initial={{ y: 100 }} animate={{ y: 0 }} transition={{ ...slower, duration: 0.6, delay: '0.4' }}>
					©2023
				</motion.p>
			</div>
		</header>
	)
}
