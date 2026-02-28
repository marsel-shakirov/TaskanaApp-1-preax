export const CheckIcon = ({ size, color, ...props }) => {
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
				d="M18.564 7.506a.75.75 0 0 1-.07 1.058l-8 7a.75.75 0 0 1-.982.005l-3.5-3a.75.75 0 0 1 .976-1.138l3.007 2.577 7.511-6.572a.75.75 0 0 1 1.058.07"
				clipRule="evenodd"
			/>
		</svg>
	)
}
