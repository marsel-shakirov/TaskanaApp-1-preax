import { TasksContext } from '@/contexts'

import { useState } from 'react'

export const TasksProvider = ({ children }) => {
	const [isEditorTaskOpen, setIsEditorTaskOpen] = useState(false)

	return (
		<TasksContext value={{ isEditorTaskOpen, setIsEditorTaskOpen }}>
			{children}
		</TasksContext>
	)
}
