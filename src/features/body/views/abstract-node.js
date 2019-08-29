/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import { styles } from './styles'

export const AbstractNode = ({ name, marginLeft }) => (
	<div className={styles.node} style={{ marginLeft: `${marginLeft}px` }}>{name}</div>
)
