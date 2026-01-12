import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'
import { ICON_PLUS } from '@/constants'

import { Button, Icon, Logo } from '@/components'

import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.headerInner}>
				<Button className="createButton">
					<Icon name={ICON_PLUS} width="24" height="24" color="#fff" />
					<span>Создать</span>
				</Button>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
