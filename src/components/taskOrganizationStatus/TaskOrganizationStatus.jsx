import { ICONS } from '@/constants'

import { Illustration } from '@/components/illustration/Illustration.jsx'

import styles from './taskOrganizationStatus.module.css'

export const TaskOrganizationStatus = () => {
	return (
		<div className={styles.taskStatus}>
			<div className={styles.taskStatusWrap}>
				<h3 className={styles.taskStatusTitle}>
					Все твои задачи организованы как надо
				</h3>
				<p className={styles.taskStatusDesc}>
					Отличная работа! Ты большой молодец!
				</p>
			</div>
			<div>
				<Illustration name={ICONS.TASK} width="463" height="319" />
			</div>
		</div>
	)
}
