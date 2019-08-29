/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import { styles } from './styles'

export const HeaderView = ({ createTree, progress, updateProgress }) => (
	<div className={styles.header}>
		<div className={styles.process_line} style={{ width: `${progress}%` }} />
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
	</div>
)
