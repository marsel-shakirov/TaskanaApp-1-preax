const iconModules = import.meta.glob('./icons/*.jsx', { eager: true })
const icons = {}
Object.keys(iconModules).forEach((path) => {
	const componentName = path.split('/').pop().replace('.jsx', '')
	icons[componentName] =
		iconModules[path].default || iconModules[path][componentName]
})

export const Icon = ({ name, size = 24, color = 'currentColor', ...props }) => {
	const IconComponent = icons[name]

	if (!IconComponent) {
		console.warn(`Icon '${name}' not found`)
		return null
	}

	return <IconComponent size={size} color={color} {...props} />
}
