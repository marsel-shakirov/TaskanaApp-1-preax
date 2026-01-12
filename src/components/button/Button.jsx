import styles from './button.module.css'

export const Button = ({ children, onClick, className, ...props }) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`${styles.mainButton} ${styles[className]}`}
			{...props}
		>
			{children}
		</button>
	)
}
