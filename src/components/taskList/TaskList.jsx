import { clsx } from '@/utils'

import styles from './taskList.module.css'

export const TaskList = () => {
	return (
		<ul className={styles.taskList}>
			<li className={styles.taskItem} tabIndex={0}>
				<div className={styles.taskItemWrap}>
					<label className={styles.checkboxLabel}>
						<input type="checkbox" className={styles.checkbox} />
						<span
							className={clsx(styles, 'checkmark', 'checkmarkDefault')}
						></span>
					</label>
					<span className={styles.checkboxTitle}>
						Поиск и устранение ошибок
					</span>
				</div>
			</li>

			<li className={styles.taskItem} tabIndex={0}>
				<div className={styles.taskItemWrap}>
					<label className={styles.checkboxLabel}>
						<input type="checkbox" className={styles.checkbox} />
						<span
							className={clsx(styles, 'checkmark', 'checkmarkSecond')}
						></span>
					</label>
					<span className={styles.checkboxTitle}>
						Поиск и устранение ошибок
					</span>
				</div>
			</li>

			<li className={styles.taskItem} tabIndex={0}>
				<div className={styles.taskItemWrap}>
					<label className={styles.checkboxLabel}>
						<input type="checkbox" className={styles.checkbox} />
						<span
							className={clsx(styles, 'checkmark', 'checkmarkThird')}
						></span>
					</label>
					<span className={styles.checkboxTitle}>
						Поиск и устранение ошибок
					</span>
				</div>
			</li>
		</ul>
	)
}
