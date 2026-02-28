import { useRef, useState } from 'react'

import { clsx } from '@/utils'

import { ICONS } from '@/constants'

import { Button, Icon } from '@/components'

import styles from './Dropdown.module.css'

const DROPDOWN_ICONS = [
	{ name: ICONS.PRIORITY_DOWN, title: 'Приоритету' },
	{ name: ICONS.PRIORITY_TOP, title: 'Приоритету' },
	{ name: ICONS.ALPHABET_DOWN, title: 'Алфавиту' },
	{ name: ICONS.ALPHABET_TOP, title: 'Алфавиту' },
	{ name: ICONS.NUMBER_DOWN, title: 'Дате создания' },
	{ name: ICONS.NUMBER_TOP, title: 'Дате создания' },
	{ name: ICONS.UPDATE_DOWN, title: 'Дате обновления' },
	{ name: ICONS.UPDATE_TOP, title: 'Дате обновления' },
]

export const Dropdown = () => {
	const [filterSelected, setFilterSelected] = useState(4)
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const dialogRef = useRef(null)

	const handleFilterSelect = (index) => {
		setFilterSelected(index)
	}

	const handleShowDialog = () => {
		if (dialogRef.current.open) {
			dialogRef.current.close()
			setIsDialogOpen(false)
		} else {
			dialogRef.current.show()
			setIsDialogOpen(true)
		}
	}

	return (
		<div className={clsx(styles, 'dropdown', { open: isDialogOpen })}>
			<Button
				icons={[{ name: ICONS.NUMBER_DOWN }, { name: ICONS.CHEVRON_DOWN }]}
				title="По дате создания"
				classes={['dialogButton']}
				onClick={handleShowDialog}
			/>

			<dialog
				ref={dialogRef}
				aria-label="Выберите параметры сортировки задач"
				className={styles.dropdownDialog}
			>
				<div className={styles.dropdownHeader}>
					<Icon name={ICONS.FILTER} />
					<h3 className={styles.dropdownTitle}>Сортировка по:</h3>
				</div>

				<ul className={styles.dropdownList}>
					{DROPDOWN_ICONS.map(({ name, title }, index) => (
						<li
							key={`${name}_${index}`}
							onClick={() => handleFilterSelect(index)}
							className={clsx(
								styles,
								'dropdownItem',
								filterSelected === index ? 'selected' : ''
							)}
						>
							<Button
								icons={[{ name }, { name: ICONS.CHECK }]}
								classes={['dropdownButton']}
								title={title}
							/>
						</li>
					))}
				</ul>
			</dialog>
		</div>
	)
}
