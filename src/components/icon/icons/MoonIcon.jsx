export const MoonIcon = ({ size, color, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			aria-hidden="true"
			{...props}
		>
			<path
				fill={color}
				d="M13.113 4C8.74 4 5.2 7.582 5.2 12s3.54 8 7.913 8a7.85 7.85 0 0 0 5.515-2.264.57.57 0 0 0 .11-.668.57.57 0 0 0-.602-.304q-.519.092-1.065.093c-3.43 0-6.214-2.814-6.214-6.286a6.29 6.29 0 0 1 3.162-5.475.573.573 0 0 0-.234-1.064 8 8 0 0 0-.672-.028z"
			/>
		</svg>
	)
}
