export const LoadingIcon = ({ size, color, ...props }) => {
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
				stroke={color}
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="M12.07 6A6 6 0 1 0 18 12.07"
			/>
		</svg>
	)
}
