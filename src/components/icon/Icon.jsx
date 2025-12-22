export const Icon = ({ name, width = '21', height = '21', fill = '#fff' }) => {
	const isNotFoundName = !name

	if (isNotFoundName) {
		console.warn(`Icon component for "${name}" not found.`)
		return null
	}

	return (
		<svg width={width} height={height} fill={fill}>
			<use href={`#icon-${name}`}></use>
		</svg>
	)
}
