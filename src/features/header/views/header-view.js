/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import { AddFileButton } from './add-files'
import { styles } from './styles'

export const HeaderView = ({ createTree, progress, updateProgress }) => (
	<div className={styles.header}>
		<div className={styles.process_line} style={{ width: `${progress}%` }} />
		<AddFileButton createTree={createTree} updateProgress={updateProgress} />
	</div>
)
