import { TasksContext } from '@/contexts'

import { useContext } from 'react'

export function useTasks() {
	return useContext(TasksContext)
}
