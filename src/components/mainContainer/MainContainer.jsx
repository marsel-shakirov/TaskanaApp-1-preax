import { TaskList } from '@/components'

import styles from './MainContainer.module.css'

export const MainContainer = () => {
	return (
		<main className={styles.main}>
			<h1 className="visually-hidden">
				Taskana — ваш персональный планировщик задач
			</h1>
			<section className={styles.mainSection}>
				<h2 className={styles.mainTitle}>Входящие</h2>
				<TaskList />
				{/* <TaskOrganizationStatus /> */}
			</section>
		</main>
	)
}
