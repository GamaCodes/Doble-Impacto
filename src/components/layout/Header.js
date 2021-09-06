import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className="relative py-6">
			<div className="w-full max-w-6xl px-6 mx-auto">
				<div className="relative flex items-center justify-between">
					<h1 className="m-0 text-xl font-bold leading-none uppercase">
						<Link to="/" className="flex items-center no-underline">
							<svg
								className="mr-2"
								width="130"
								height="130"
								viewBox="0 0 130 130"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="65" cy="65" r="65" fill="black" />
								<path
									d="M86.0487 16H77.3794H69.7218L30 106.39H46.0241L75.4416 33.123L83.4895 106.39H99.5893L86.0487 16Z"
									fill="white"
								/>
								<path
									d="M50.6573 114H76.5437L70.8259 64.7206L50.6573 114Z"
									fill="#BF1E2D"
								/>
							</svg>
						</Link>
					</h1>
				</div>
			</div>
		</header>
	)
}

export default Header
