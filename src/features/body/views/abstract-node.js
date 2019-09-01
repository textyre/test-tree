/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React, { useCallback, useState } from 'react'
import c from 'classnames'
import { ReactComponent as Cancel } from '@shared/icons/cancel.svg'
import { styles } from './styles'

export const AbstractNode = ({
	globalVersion,
	nodeVersion,
	name,
	comment,
	marginLeft,
	onClickNode,
	onDeleteComment,
	status
}) => {
	const [isShowComment, setShowComment] = useState(false);

	const styledNode = c({
		[styles.node]: true,
		[styles.node_removed]: nodeVersion < globalVersion,
		[styles.node_edit]: status === 'RENAME' && nodeVersion === globalVersion
	})

	const styledComment = c({
		[styles.wrapper_comment]: true,
		[styles.active_comment]: isShowComment
	})

	const onShowComment = useCallback(() => {
		setShowComment(!isShowComment)
	}, [isShowComment, setShowComment])

	const onClick = useCallback(() => {
		onClickNode();
		onShowComment();
	}, [onClickNode, onShowComment])

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftPart}>
				<div
					className={styledNode}
					onClick={onClick}
					style={{ marginLeft: `${marginLeft}px` }}
					role="presentation"
				>{name}
				</div>
				{comment && (
					<div className={styledComment}>
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
		</div>
	)
}
