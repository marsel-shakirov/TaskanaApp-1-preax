export const PriorityTopIcon = ({ size, color, ...props }) => {
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
				fillRule="evenodd"
				d="M7.05 20.25a.75.75 0 0 1-.75-.75V6.454L3.557 9.502a.75.75 0 1 1-1.114-1.004l4.05-4.5a.75.75 0 0 1 1.12.007l3.95 4.5a.75.75 0 1 1-1.127.99L7.8 6.49V19.5a.75.75 0 0 1-.75.75M20.65 5.375c0 .207-.15.375-.333.375h-5.334c-.184 0-.333-.168-.333-.375S14.8 5 14.983 5h5.334c.184 0 .333.168.333.375"
				clipRule="evenodd"
			/>
			<path
				fill="#d51010"
				fillRule="evenodd"
				d="M17.437 12.827a.33.33 0 0 1 .426 0l2.667 2.223a.333.333 0 1 1-.427.512l-2.453-2.045-2.453 2.045a.333.333 0 1 1-.427-.512zm.426 3.111 2.667 2.223a.333.333 0 0 1-.427.512l-2.453-2.045-2.453 2.045a.333.333 0 1 1-.427-.512l2.667-2.223a.33.33 0 0 1 .426 0"
				clipRule="evenodd"
			/>
		</svg>
	)
}
