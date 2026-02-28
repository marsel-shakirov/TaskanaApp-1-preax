export const TrashIcon = ({ size, color, ...props }) => {
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
				d="M9.225 4.553 9 5H6a.999.999 0 1 0 0 2h12a.999.999 0 1 0 0-2h-3l-.225-.447A1 1 0 0 0 13.881 4H10.12a1 1 0 0 0-.894.553M18 8H6l.662 10.594c.05.79.707 1.406 1.497 1.406h7.682c.79 0 1.447-.616 1.496-1.406z"
			/>
		</svg>
	)
}
