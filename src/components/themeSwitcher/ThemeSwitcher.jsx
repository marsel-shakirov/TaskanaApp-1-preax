import { ICON_MOON, ICON_SUN } from '@/constants'

import { useEffect, useState } from 'react'

import { Button, Icon } from '@/components'

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
			<Button onClick={handleSwitchTheme} className="themeButton">
				<div className={styles.themeSun}>
					<Icon name={ICON_SUN} width="24" height="24" />
				</div>
				<div className={styles.themeMoon}>
					<Icon name={ICON_MOON} width="24" height="24" />
				</div>
				<span className="visually-hidden">Переключить на {nextTheme} тему</span>
			</Button>
		</div>
	)
}
