import { ThemeContext } from '@/context/ThemeContext'

import { useEffect, useState } from 'react'

export const ThemeProvider = ({ children }) => {
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

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
