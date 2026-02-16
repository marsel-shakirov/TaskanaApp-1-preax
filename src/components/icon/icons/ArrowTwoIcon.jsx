export const ArrowTwoIcon = ({ size, color, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			aria-hidden="true"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill={color}
				fillRule="evenodd"
				d="M11.52 5a.75.75 0 0 1 .96 0l6 5.424a.75.75 0 0 1-.96 1.152L12 6.552l-5.52 5.024a.75.75 0 1 1-.96-1.152zm.96 7 6 5.424a.75.75 0 0 1-.96 1.152L12 13.552l-5.52 5.024a.75.75 0 1 1-.96-1.152l6-5.424a.75.75 0 0 1 .96 0"
				clipRule="evenodd"
			/>
		</svg>
	)
}
