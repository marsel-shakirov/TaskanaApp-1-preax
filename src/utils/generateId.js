const usedIds = new Set()

export const generateId = () => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let id

	do {
		id = ''
		for (let i = 0; i < 8; i++) {
			id += chars.charAt(Math.floor(Math.random() * chars.length))
		}
	} while (usedIds.has(id))

	usedIds.add(id)
	return id
}
