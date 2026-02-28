export const FilterIcon = ({ size, color, ...props }) => {
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
				d="M5.317 20h3.95c.729 0 1.317-.715 1.317-1.6s-.588-1.6-1.317-1.6h-3.95C4.588 16.8 4 17.515 4 18.4S4.588 20 5.317 20m0-6.4h8.757c.729 0 1.317-.715 1.317-1.6s-.588-1.6-1.317-1.6H5.317C4.588 10.4 4 11.115 4 12s.588 1.6 1.317 1.6m0-6.4h13.366C19.412 7.2 20 6.485 20 5.6S19.412 4 18.683 4H5.317C4.588 4 4 4.715 4 5.6s.588 1.6 1.317 1.6"
			/>
		</svg>
	)
}
