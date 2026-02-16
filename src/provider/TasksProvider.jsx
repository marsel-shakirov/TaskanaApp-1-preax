import { TasksContext } from '@/contexts'

import { useState } from 'react'

export const TasksProvider = ({ children }) => {
	const [isEditorTaskOpen, setIsEditorTaskOpen] = useState(false)
	const [tasks, setTasks] = useState([])

	return (
		<TasksContext
			value={{
				isEditorTaskOpen,
				tasks,
				setIsEditorTaskOpen,
				setTasks,
			}}
		>
			{children}
		</TasksContext>
	)
}
