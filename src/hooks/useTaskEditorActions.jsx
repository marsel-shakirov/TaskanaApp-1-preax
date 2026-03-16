import { useState } from 'react'

import { useEditor, useTasks } from '@/contexts'

import { createTask, generateId } from '@/utils'

export const useTaskEditorActions = (delay = 1000) => {
	const { tasks, setTasks } = useTasks()
	const { setEditorMode, setEditingTaskIndex } = useEditor()
	const [pendingAction, setPendingAction] = useState(null)

	const createTaskWithDelay = (title, priority) => {
		if (!title) return
		setPendingAction('create')
		setTimeout(() => {
			setTasks([createTask(generateId, title, priority), ...tasks])
			setPendingAction(null)
			setEditorMode(null)
		}, delay)
	}

	const closeEditorWithDelay = () => {
		setPendingAction('close')
		setTimeout(() => {
			setPendingAction(null)
			setEditorMode(null)
		}, delay)
	}

	const openEditorWithDelay = (editor = 'create', index) => {
		if (pendingAction) return
		setPendingAction('create')
		setTimeout(() => {
			setPendingAction(null)
			setEditorMode(editor)
			setEditingTaskIndex(index)
		}, delay)
	}

	return {
		pendingAction,
		createTaskWithDelay,
		closeEditorWithDelay,
		openEditorWithDelay,
	}
}
