import { ICON_MOON, ICON_SUN } from '@/constants'

import { Button, Icon } from '@/components'

import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
	return (
		<div className={styles.theme}>
			<Button className="sunButton">
				<Icon name={ICON_SUN} color="#fff" />
				<span className="visually-hidden">Переключить на светлую темуэ</span>
			</Button>
			<Button className="moonButton">
				<Icon name={ICON_MOON} color="#6C6C6C" />
				<span className="visually-hidden">Переключить на тёмную тему</span>
			</Button>
		</div>
	)
}
