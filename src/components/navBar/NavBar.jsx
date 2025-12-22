import { ICON_INBOX } from '@/constants'

import { Icon } from '@/components'

import styles from './navBar.module.css'

export const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<a className={styles.navLink} href="#">
						<Icon name={ICON_INBOX} width="24" height="24" fill="#fff" />
						<span className={styles.navLinkText}>Входящие</span>
					</a>
				</li>
			</ul>
		</nav>
	)
}
