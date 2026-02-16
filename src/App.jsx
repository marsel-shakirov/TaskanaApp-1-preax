import { TasksProvider, ThemeProvider } from './providers'

import { AppLayout } from '@/layouts'

export const App = () => {
	return (
		<ThemeProvider>
			<TasksProvider>
				<AppLayout />
			</TasksProvider>
		</ThemeProvider>
	)
}
