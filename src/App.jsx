import { TasksProvider } from './provider/TasksProvider'

import { AppLayout } from '@/layouts'

export const App = () => {
	return (
		<TasksProvider>
			<AppLayout />
		</TasksProvider>
	)
}
