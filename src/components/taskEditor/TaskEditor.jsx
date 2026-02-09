import { ICON_ARROW, ICON_CHEVRON, ICON_DELETE, ICON_MINUS } from '@/constants'

import { useEffect, useId, useRef, useState } from 'react'

import { useTasks } from '@/hooks/contexts'

import { clsx } from '@/utils'

import { Button } from '@/components'

import styles from './TaskEditor.module.css'

const EDITOR_TASK_BUTTONS = [ICON_MINUS, ICON_CHEVRON, ICON_ARROW]

export const TaskEditor = () => {
	const { isEditorTaskOpen, setIsEditorTaskOpen } = useTasks()
	const [isPriorityActive, setIsPrioryActive] = useState(0)

	const [inputValue, setInputValue] = useState('')
	const [isCloseTaskEditor, setIsCloseTaskEditor] = useState(false)
	const [isDisabledTaskButton, setIsDisabledTaskButton] = useState(true)
	// const [isCreateTask, setIsCreateTask] = useState(false)
	const formId = useId()
	const inputRef = useRef(null)

	const handleCloseTaskEditor = () => {
		setIsCloseTaskEditor(true)
		setTimeout(() => {
			setIsCloseTaskEditor(false)
			setIsEditorTaskOpen(false)
		}, 1000)
	}
	// const handleCreateTaskEditor = () => {
	// 	setIsCreateTask(true)
	// 	setTimeout(() => {
	// 		setIsCreateTask(false)
	// 	}, 1000)
	// }

	const handleChange = (event) => {
		const value = event.target.value
		const cleaned = value.trim()

		if (cleaned !== '') {
			setInputValue(value)
		} else {
			setInputValue('')
		}
	}

	const handleReset = () => {
		inputRef.current.focus()
		setInputValue('')
	}

	const handlePriorityActive = (index) => {
		setIsPrioryActive(index)
	}

	useEffect(() => {
		const inputElement = inputRef.current

		if (inputElement.value) {
			inputElement.classList.add(`${styles['close-hidden']}`)
			setIsDisabledTaskButton(false)
		} else {
			inputElement.classList.remove(`${styles['close-hidden']}`)
			setIsDisabledTaskButton(true)
		}
	}, [inputValue])

	useEffect(() => {
		if (isEditorTaskOpen) {
			setTimeout(() => inputRef.current.focus(), 400)
		}
		setIsPrioryActive(0)
		setInputValue('')
	}, [isEditorTaskOpen])

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
						<span className={styles.formEditorHeading}>Название</span>
						<label className={styles.formEditorLabel}>
							<span className="visually-hidden">Название задачи</span>
							<input
								id="editor-input"
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
								titleHidden={true}
								classes={['resetFormInput']}
							/>
						</label>
					</form>
				</div>
				<div className={styles.taskPriority}>
					<div className={styles.taskPriorityInner}>
						<h2 className={styles.priorityHeading}>Приоритет</h2>
						{EDITOR_TASK_BUTTONS.map((element, index) => {
							return (
								<Button
									key={`${element}_${index}`}
									onClick={() => handlePriorityActive(index)}
									icons={[{ name: element }]}
									title={`Поставить приоритет задачи на ${index}`}
									titleHidden={true}
									classes={[
										'priorityButton',
										`priority${element}`,
										isPriorityActive === index ? 'active' : '',
									]}
								/>
							)
						})}
					</div>
				</div>
			</div>
			<div className={styles.taskFooter}>
				<Button
					// isLoading={isCreateTask}
					isDisabled={isDisabledTaskButton}
					form={formId}
					type="submit"
					classes={['taskEditorButton', 'taskSubmitButton']}
					title="Создать"
				/>
				<Button
					type="button"
					onClick={handleCloseTaskEditor}
					isLoading={isCloseTaskEditor}
					classes={['taskEditorButton', 'taskResetButton']}
					title="Отмена"
				/>
			</div>
		</aside>
	)
}
