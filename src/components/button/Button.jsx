import styles from './button.module.css'

export const Button = ({
	children,
	disabled = false,
	onClick,
	className,
	...props
}) => {
	return (
		<button
			onClick={onClick}
			type="button"
			disabled={disabled}
			className={`${styles.mainButton} ${styles[className]}`}
			{...props}
		>
			{children}
		</button>
	)
}
