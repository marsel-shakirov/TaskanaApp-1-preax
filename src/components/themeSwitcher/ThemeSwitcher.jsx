import { ICON_MOON, ICON_SUN } from '@/constants'

import { useEffect, useState } from 'react'

import { Button } from '@/components'

import styles from './themeSwitcher.module.css'

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('light')

	const nextTheme = theme === 'light' ? 'тёмную' : 'светлую'

	useEffect(() => {
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		setTheme(prefersDark ? 'dark' : 'light')
	}, [])

	useEffect(() => {
		document.body.style.colorScheme = theme
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	const handleSwitchTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<div className={styles.themeSwitcher}>
			<Button
				onClick={handleSwitchTheme}
				icons={[
					{ name: ICON_SUN, size: '32' },
					{ name: ICON_MOON, size: '32' },
				]}
				classes={['themeButton']}
			>
				<span className={`${styles.active} ${styles[theme]}`}>
					Переключить на {nextTheme} тему
				</span>
			</Button>
		</div>
	)
}
