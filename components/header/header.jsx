export default function Header() {
	return (
		<header>
			<p>
				MER<span className='ft-alt-it'>LIN</span>
			</p>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				fill='none'
			>
				<path
					stroke='#fff'
					d='M8 0v16M0 8h16M1 4l13.856 8M4 14.928l8-13.856m-8 0 8 13.856M1 12l13.856-8'
				/>
			</svg>
			<p>
				{'->'}BO<span className='ft-alt-it'>OK</span>
			</p>
		</header>
	)
}
