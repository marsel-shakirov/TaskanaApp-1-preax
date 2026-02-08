export const clsx = (styles, ...args) => {
	const classes = []
	for (const arg of args) {
		if (typeof arg === 'string' && arg) {
			classes.push(arg)
		} else if (typeof arg === 'object' && arg !== null) {
			for (const key in arg) {
				if (Object.hasOwn(arg, key) && arg[key]) {
					classes.push(key)
				}
			}
		}
	}
	return classes.map((el) => styles[el]).join(' ')
}
