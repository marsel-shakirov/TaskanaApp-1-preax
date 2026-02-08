import { TaskEditor } from '../taskEditor/TaskEditor'

import { IncomingTasks } from '@/pages'

import { NavBar, SideBar } from '@/components'

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
