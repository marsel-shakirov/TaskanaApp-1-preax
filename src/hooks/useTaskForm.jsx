import { useCallback, useEffect, useMemo, useState } from 'react'

export const useTaskForm = (initialTask, mode) => {
	const [formState, setFormState] = useState({
		title: '',
		priority: 1,
	})

	useEffect(() => {
		if (mode === 'edit' && initialTask) {
			return setFormState({
				title: initialTask.title,
				priority: initialTask.priority,
			})
		}

		return setFormState({
			title: '',
			priority: 1,
		})
	}, [initialTask, mode])

	const updateField = useCallback((field, value) => {
		setFormState((prev) => {
			if (prev[field] === value) return prev
			return { ...prev, [field]: value }
		})
	}, [])

	const resetForm = useCallback(() => {
		setFormState((prev) => {
			return { ...prev, title: '' }
		})
	}, [])

	const isValid = useMemo(() => {
		return formState.title.trim().length > 0
	}, [formState.title])

	const isDirty = useMemo(() => {
		if (mode !== 'edit' || !initialTask) return true

		const initialTitle = initialTask.title.trim()
		const currentTitle = formState.title.trim()

		return (
			initialTitle !== currentTitle ||
			initialTask.priority !== formState.priority
		)
	}, [mode, initialTask, formState])

	return {
		formState,
		updateField,
		resetForm,
		isValid,
		isDirty,
	}
}
