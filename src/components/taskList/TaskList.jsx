import { useMemo, useState } from 'react'

import { useEditor, useTasks } from '@/contexts'

import { sortItems } from '@/utils'

import { DROPDOWN_ICONS } from '@/constants'

import { TaskItem } from './'

import styles from './taskList.module.css'

export const TaskList = () => {
	const { tasks, filterSelected } = useTasks()
	const [taskIndex, setTaskIndex] = useState(null)
	const { editorMode } = useEditor()

	const sortedTasks = useMemo(() => {
		return sortItems(tasks, filterSelected, DROPDOWN_ICONS)
	}, [tasks, filterSelected])

	const handleChangeIndex = (index) => {
		setTaskIndex(index)
	}
	return (
		<ul className={styles.taskList}>
			{sortedTasks.map((item, index) => {
				const isTaskActive = taskIndex === index && editorMode === 'edit'
				return (
					<TaskItem
						key={item.id}
						{...item}
						isActive={isTaskActive}
						handleChangeIndex={() => handleChangeIndex(index)}
					/>
				)
			})}
		</ul>
	)
}
