import { ThemeProvider } from '@/provider/ThemeContext'

import { Content, Header } from '@/components'

export const AppLayout = () => {
	return (
		<ThemeProvider>
			<Header />
			<Content />
		</ThemeProvider>
	)
}
