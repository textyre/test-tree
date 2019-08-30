/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import { styles } from './styles'
import { Comment } from './comment'

export const FooterView = props => (
	<div className={styles.footer}>
		<Comment {...props} />
	</div>
)
