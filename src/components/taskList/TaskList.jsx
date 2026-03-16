import { TaskItem } from '../taskItem/TaskItem'

import { useTasks } from '@/contexts'

import styles from './taskList.module.css'

export const TaskList = () => {
	const { tasks } = useTasks()

	return (
		<ul className={styles.taskList}>
			{tasks.map((item, index) => {
				return <TaskItem key={item.id} {...item} taskIndex={index} />
			})}
		</ul>
	)
}
