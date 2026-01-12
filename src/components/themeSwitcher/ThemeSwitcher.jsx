import { ICON_MOON, ICON_SUN } from '@/constants'

import { useEffect, useState } from 'react'

import { Button, Icon } from '@/components'

import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		setTheme(prefersDark ? 'dark' : 'light')
	}, [])

	useEffect(() => {
		document.body.style.colorScheme = theme
	}, [theme])

	const handleThemeLight = () => {
		setTheme('light')
	}

	const handleThemeDark = () => {
		setTheme('dark')
	}

	return (
		<div className={styles.theme}>
			<Button onClick={handleThemeLight} className="sunButton">
				<Icon name={ICON_SUN} width="24" height="24" />
				<span className="visually-hidden">Переключить на светлую тему</span>
			</Button>
			<Button onClick={handleThemeDark} className="moonButton">
				<Icon name={ICON_MOON} width="24" height="24" />
				<span className="visually-hidden">Переключить на тёмную тему</span>
			</Button>
		</div>
	)
}
