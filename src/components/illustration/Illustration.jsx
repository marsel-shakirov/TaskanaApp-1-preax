const imageModules = import.meta.glob('./illustrations/*.jsx', { eager: true })
const images = {}
Object.keys(imageModules).forEach((path) => {
	const componentName = path.split('/').pop().replace('.jsx', '')
	images[componentName] =
		imageModules[path].default || imageModules[path][componentName]
})

export const Illustration = ({
	name,
	size = 24,
	color = 'currentColor',
	...props
}) => {
	const ImageComponent = images[name]

	if (!ImageComponent) {
		console.warn(`Icon '${name}' not found`)
		return null
	}

	return (
		<ImageComponent className={name} size={size} color={color} {...props} />
	)
}
