import { Statistic } from '../statistic/Statistic'

import { useTasks } from '@/contexts'

import { clsx } from '@/utils'

import styles from './sideBar.module.css'

export const SideBar = () => {
	const { isTaskEditorOpen } = useTasks()

	return (
		<aside
			className={clsx(styles, 'sideBar', { sideBarHidden: isTaskEditorOpen })}
		>
			<Statistic />
		</aside>
	)
}
