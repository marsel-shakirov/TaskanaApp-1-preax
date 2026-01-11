import styles from './button.module.css'

export const Button = ({ children, className, ...props }) => {
	console.log(props.className)
	return (
		<button type="button" className={styles[className]} {...props}>
			{children}
		</button>
	)
}
