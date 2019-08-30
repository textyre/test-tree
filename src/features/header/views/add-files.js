import React from 'react'
import { styles } from './styles'

export const AddFileButton = ({ createTree, updateProgress }) => (
	<div className={styles.custon_input}>
		<span>Добавить файл</span>
		<input
			id="csvLoad"
			className={styles.input}
			type="file"
			accept=".csv, text/csv"
			onChange={createTree}
			onProgress={updateProgress}
		/>
	</div>
)
