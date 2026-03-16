import { EditorContext } from './EditorContext.jsx'

import { useState } from 'react'

export const EditorProvider = ({ children }) => {
	const [editorMode, setEditorMode] = useState(null)
	const [editingTaskIndex, setEditingTaskIndex] = useState(null)

	return (
		<EditorContext
			value={{
				editorMode,
				editingTaskIndex,
				setEditorMode,
				setEditingTaskIndex,
			}}
		>
			{children}
		</EditorContext>
	)
}
