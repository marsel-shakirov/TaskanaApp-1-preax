import { ICON_ARROW, ICON_CHEVRON, ICON_DELETE, ICON_MINUS } from '@/constants'

import { useEffect, useId, useRef, useState } from 'react'

import { useTasks } from '@/hooks/contexts'

import { clsx } from '@/utils'

import { Button } from '@/components'

import styles from './TaskEditor.module.css'

export const TaskEditor = () => {
	const { isEditorTaskOpen, setIsEditorTaskOpen } = useTasks()

	const [inputValue, setInputValue] = useState('')
	const [isCloseTaskEditor, setIsCloseTaskEditor] = useState(false)
	const [isCreateTask, setIsCreateTask] = useState(false)
	const formId = useId()
	const inputRef = useRef(null)

	const handleCloseTaskEditor = () => {
		setIsCloseTaskEditor(true)
		const timerId = setTimeout(() => {
			setIsCloseTaskEditor(false)
			setIsEditorTaskOpen(false)
			clearTimeout(timerId)
		}, 5000)
	}
	const handleCreateTaskEditor = () => {
		setIsCreateTask(true)
		const timerId = setTimeout(() => {
			setIsCreateTask(false)
			clearTimeout(timerId)
		}, 5000)
	}

	const handleChange = (event) => {
		const target = event.target
		setInputValue(target.value)
	}

	const handleReset = () => {
		inputRef.current.focus()
		setInputValue('')
	}

	useEffect(() => {
		const inputElement = inputRef.current

		if (inputElement.value) {
			inputElement.classList.add(`${styles['close-hidden']}`)
		} else {
			inputElement.classList.remove(`${styles['close-hidden']}`)
		}
	}, [inputValue])

	return (
		<aside
			className={clsx(styles, 'taskEditor', {
				taskEditorOpen: isEditorTaskOpen,
			})}
		>
			<div className={styles.taskEditorInner}>
				<div className={styles.taskHeader}>
					<h2 className={styles.taskHeading}>Создание задачи</h2>
					<form id={formId} action="" className={styles.formEditor}>
						<label className={styles.formEditorLabel}>
							<span className={styles.formEditorHeading}>Название</span>
							<input
								ref={inputRef}
								onChange={handleChange}
								name="create"
								placeholder="Название задачи"
								type="text"
								value={inputValue}
								className={styles.formEditorInput}
							/>
							<Button
								onClick={handleReset}
								type="button"
								icons={[{ name: ICON_DELETE }]}
								title="Очистить поле"
								titleHidden="true"
								classes={['resetFormInput']}
							/>
						</label>
					</form>
				</div>
				<div className={styles.taskPriority}>
					<div className={styles.taskPriorityInner}>
						<h2 className={styles.priorityHeading}>Приоритет</h2>

						<Button
							icons={[{ name: ICON_MINUS }]}
							title="Поставить приоритет задачи на один"
							titleHidden="true"
							classes={['priorityButton', 'priorityMinus', 'active']}
						/>
						<Button
							icons={[{ name: ICON_CHEVRON }]}
							title="Поставить приоритет задачи на два"
							titleHidden="true"
							classes={['priorityButton', 'priorityChevron']}
						/>
						<Button
							icons={[{ name: ICON_ARROW }]}
							title="Поставить приоритет задачи на три"
							titleHidden="true"
							classes={['priorityButton', 'priorityArrow']}
						/>
					</div>
					<div className={styles.taskPriorityInner}>
						<h2 className={styles.priorityHeading}>Приоритет</h2>

						<Button
							icons={[{ name: ICON_MINUS }]}
							title="Поставить приоритет задачи на один"
							titleHidden="true"
							classes={['priorityButton', 'priorityMinus', 'active']}
						/>
						<Button
							icons={[{ name: ICON_CHEVRON }]}
							title="Поставить приоритет задачи на два"
							titleHidden="true"
							classes={['priorityButton', 'priorityChevron']}
						/>
						<Button
							icons={[{ name: ICON_ARROW }]}
							title="Поставить приоритет задачи на три"
							titleHidden="true"
							classes={['priorityButton', 'priorityArrow']}
						/>
					</div>
				</div>
			</div>
			<div className={styles.taskFooter}>
				<Button
					onClick={handleCreateTaskEditor}
					isLoading={isCreateTask}
					form={formId}
					type="button"
					classes={[
						'taskEditorButton',
						'taskSubmitButton',
						isCreateTask ? 'loadingButton' : '',
					]}
					title="Создать"
				/>
				<Button
					onClick={handleCloseTaskEditor}
					isLoading={isCloseTaskEditor}
					classes={[
						'taskEditorButton',
						'taskResetButton',
						isCloseTaskEditor ? 'loadingButton' : '',
					]}
					title="Отмена"
				/>
			</div>
		</aside>
	)
}
