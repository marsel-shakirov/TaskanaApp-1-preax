import TaskIllustrationImage from '@/assets/images/svg/task-illustration.svg'

import styles from './taskList.module.css'

export const TaskList = () => {
	return (
		<section className={styles.taskList}>
			<div className={styles.taskListWrap}>
				<h2 className={styles.taskListTitle}>
					Все твои задачи организованы как надо
				</h2>
				<p className={styles.taskListDesc}>
					Отличная работа! Ты большой молодец!
				</p>
			</div>
			<div className={styles.taskListImg}>
				<img
					src={TaskIllustrationImage}
					width="463"
					height="319"
					alt="Девушка в позе лотоса среди отмеченных задач"
				/>
			</div>
		</section>
	)
}
