import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'
import { ICON_PLUS } from '@/constants'

import { useState } from 'react'

import { Button, Logo } from '@/components'

import styles from './header.module.css'

export const Header = () => {
	const [isLoading, setLoading] = useState(false)

	const handleCreateTask = () => {
		setLoading(true)
		const timerId = setTimeout(() => {
			setLoading(false)
			clearTimeout(timerId)
		}, 2000)
	}

	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.headerInner}>
				<Button
					onClick={handleCreateTask}
					isLoading={isLoading}
					icons={[{ name: ICON_PLUS, color: '#fff' }]}
					title="Создать"
					classes={['createButton', isLoading ? 'loadingButton' : '']}
				></Button>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
