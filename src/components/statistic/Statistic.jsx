import { ICON_NOTE } from '@/constants'

import { Illustration } from '@/components/illustration/Illustration.jsx'

import styles from './Statistic.module.css'

export const Statistic = () => {
	return (
		<div className={styles.statistic}>
			<div className={styles.statisticImg}>
				<Illustration
					name={ICON_NOTE}
					width="231"
					height="168"
					color="#393939"
				/>
			</div>
			<p className={styles.statisticDesc}>
				Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
				и&nbsp;самочувствие.
			</p>
		</div>
	)
}
