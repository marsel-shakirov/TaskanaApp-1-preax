import NoteBookImage from '@/assets/images/svg/notebook.svg'

import styles from './Statistic.module.css'

export const Statistic = () => {
	return (
		<div className={styles.statistic}>
			<div className={styles.statisticImg}>
				<img src={NoteBookImage} width="231" height="168" alt="" />
			</div>
			<p className={styles.statisticDesc}>
				Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
				и&nbsp;самочувствие.
			</p>
		</div>
	)
}
