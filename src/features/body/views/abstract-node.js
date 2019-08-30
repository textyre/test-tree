/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import c from 'classnames'
import { ReactComponent as Cancel } from '@shared/icons/cancel.svg'
import { styles } from './styles'

const EDITABLE = 'EDITABLE';
const NEW = 'NEW';
const OLD = 'OLD';

export const AbstractNode = ({ name, comment, marginLeft, onClickNode, onDeleteComment, status }) => (
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
		{comment && (
			<div className={styles.wrapper_comment}>
				<span
					className={styles.comment}
				>{comment}
				</span>
				<div
					onClick={onDeleteComment}
					role="presentation"
					className={styles.wrapper_comment_delete}
				>
					<Cancel
						className={styles.comment_delete}
						alt="Удалить комментарий"
					/>
				</div>
			</div>
		)}
	</div>
)
