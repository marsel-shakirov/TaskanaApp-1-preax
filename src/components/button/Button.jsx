import { ICON_LOADING } from '@/constants'

import { Icon } from '@/components'

import styles from './button.module.css'

export const Button = ({
	form = null,
	disabled = false,
	isLoading = false,
	onClick,
	classes = [],
	icons,
	title = false,
	titleHidden = false,
	children = null,
	...props
}) => {
	const classNames = classes
		.filter(Boolean)
		.map((element) => styles[element])
		.filter(Boolean)
		.join(' ')

	const visuallyHidden = titleHidden ? 'visually-hidden' : ''

	const renderIcons = () => {
		if (!Array.isArray(icons) || icons.length === 0) return null

		return icons.map(({ name, ...props }, index) => (
			<Icon key={`${name}_${index}`} name={name} {...props} />
		))
	}

	const renderTitle = () => {
		if (!title) return null

		return <span className={visuallyHidden}>{title}</span>
	}

	return (
		<button
			form={form}
			onClick={onClick}
			type="button"
			disabled={disabled || isLoading}
			className={`${styles.mainButton} ${classNames}`}
			{...props}
		>
			{isLoading ? (
				<Icon name={ICON_LOADING} />
			) : (
				<>
					{renderIcons()}
					{renderTitle()}
					{children}
				</>
			)}
		</button>
	)
}
