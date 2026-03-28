import { EditorProvider, TasksProvider, ThemeProvider } from './contexts'

import { AppLayout } from '@/layouts'

export const App = () => {
	return (
		<ThemeProvider>
			<EditorProvider>
				<TasksProvider isMockData={true}>
					<AppLayout />
				</TasksProvider>
			</EditorProvider>
		</ThemeProvider>
	)
}
