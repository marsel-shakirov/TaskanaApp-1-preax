import { useEffect, useId, useRef, useState } from 'react'

import { useEditor, useTasks } from '@/contexts'

import { useAutoFocus, useTaskEditorActions } from '@/hooks'

import { clsx } from '@/utils'

import { ICONS } from '@/constants'

import { Button, EditorInput, PrioritySelector } from '@/components'

import styles from './TaskEditor.module.css'

export const TaskEditor = () => {
	const { tasks } = useTasks()
	const { editorMode, editingTaskIndex } = useEditor()

	const { pendingAction, createTaskWithDelay, closeEditorWithDelay } =
		useTaskEditorActions(1000)
	const [inputFormValue, setInputFormValue] = useState('')
	const [priorityActive, setPriorityActive] = useState(0)

	const inputRef = useRef(null)
	const formId = useId()

	const isTaskEditorOpen = editorMode !== null
	const isEditMode = editorMode === 'edit'
	const isCreateMode = editorMode === 'create'

	const handleFormChange = (event) => {
		const value = event.target.value
		const cleaned = value.trim()

		if (cleaned !== '') {
			setInputFormValue(value)
		} else {
			setInputFormValue('')
		}
	}

	const handleFormReset = () => {
		inputRef.current?.focus()
		setInputFormValue('')
	}

	const handlePriorityChange = (index) => {
		setPriorityActive(index)
	}

	const handleCloseTaskEditor = (event) => {
		event.preventDefault()
		closeEditorWithDelay()
	}

	const handleCreateTasks = (event) => {
		event.preventDefault()
		createTaskWithDelay(inputFormValue, priorityActive)
	}

	useAutoFocus(inputRef, isTaskEditorOpen, 400)

	useEffect(() => {
		if (isCreateMode) {
			setPriorityActive(0)
			setInputFormValue('')
			return
		}

		if (isEditMode) {
			const task = tasks?.[editingTaskIndex]
			if (!task) return

			setPriorityActive(task.priority)
			setInputFormValue(task.title)
		}
	}, [isCreateMode, isEditMode, tasks, editingTaskIndex])

	return (
		<aside
			className={clsx(styles, 'taskEditor', {
				taskEditorOpen: isTaskEditorOpen,
			})}
		>
			<form
				onSubmit={handleCreateTasks}
				id={formId}
				action=""
				className={styles.taskEditorForm}
			>
				<EditorInput
					formId={formId}
					isTaskEditorOpen={isTaskEditorOpen}
					inputRef={inputRef}
					onChange={handleFormChange}
					onClick={handleFormReset}
					value={inputFormValue}
				/>
				<PrioritySelector
					isTaskEditorOpen={isTaskEditorOpen}
					onClick={handlePriorityChange}
					priorityActive={priorityActive}
				/>
			</form>
			<div className={styles.taskFooter}>
				<Button
					isLoading={pendingAction === 'create'}
					isDisabled={!inputFormValue}
					form={formId}
					type="submit"
					classes={['taskEditorButton', 'taskSubmitButton']}
					title={isEditMode ? 'Сохранить' : 'Создать'}
				/>
				<Button
					onClick={handleCloseTaskEditor}
					isDisabled={!isTaskEditorOpen}
					type="button"
					isLoading={pendingAction === 'close'}
					classes={['taskEditorButton', 'taskResetButton']}
					title="Отмена"
				/>
				{isTaskEditorOpen === 'edit' && (
					<Button
						icons={[{ name: ICONS.EDIT }]}
						classes={['taskEditorButton', 'taskEditButton']}
					/>
				)}
			</div>
		</aside>
	)
}
