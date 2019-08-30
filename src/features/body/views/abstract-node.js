/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import c from 'classnames'
import { styles } from './styles'

const EDITABLE = 'EDITABLE';
const NEW = 'NEW';
const OLD = 'OLD';

export const AbstractNode = ({ name, comment, marginLeft, onClickNode, status }) => (
	<div className={styles.wrapper}>
		<div
			className={c({
				[styles.node]: true,
				[styles.rename]: status === EDITABLE,
				[styles.for_deleted]: status === OLD,
				[styles.new]: status === NEW,
			})}
			style={{ marginLeft: `${marginLeft}px` }}
			onClick={onClickNode}
			role="presentation"
		>{name}
		</div>
		{comment && <span className={styles.comment}>{comment}</span>}
	</div>
)
