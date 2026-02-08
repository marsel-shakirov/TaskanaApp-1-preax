import { Statistic } from '../statistic/Statistic'

import { useTasks } from '@/hooks/contexts/useTasks.jsx'

import { clsx } from '@/utils'

import styles from './sideBar.module.css'

export const SideBar = () => {
	const { isEditorTaskOpen } = useTasks()

	return (
		<aside
			className={clsx(styles, 'sideBar', { sideBarHidden: isEditorTaskOpen })}
		>
			<Statistic />
		</aside>
	)
}
