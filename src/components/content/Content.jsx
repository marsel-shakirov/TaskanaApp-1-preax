import { IncomingTasks } from '@/pages'

import { NavBar, SideBar, TaskEditor } from '@/components'

import styles from './content.module.css'

export const Content = () => {
	return (
		<div className={styles.content}>
			<NavBar />
			<IncomingTasks />
			<SideBar />
			<TaskEditor />
		</div>
	)
}
