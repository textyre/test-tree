/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable react/no-danger */
import React, { useState, useCallback, useRef } from 'react'
import { ReactComponent as Cancel } from '@shared/icons/cancel.svg'
import { ReactComponent as SendMessage } from './paper-plane.svg';
import { styles } from './styles'

export const Comment = ({ setComment: setCommentInStore, setActiveForCommentByKey, node }) => {
	const [comment, setComment] = useState('');
	const editableDiv = useRef();
	const handlerInput = useCallback(() => {
		setComment(setComment)
	}, [])

	const sentComment = useCallback(() => {
		const { key } = node;
		setCommentInStore(editableDiv.current.textContent, key)
		setComment('');
		editableDiv.current.textContent = ''
	}, [node, setCommentInStore])

	const deleteReciever = useCallback(() => {
		setActiveForCommentByKey(null);
	}, [setActiveForCommentByKey])

	return (
		<div className={styles.wrapper_comment}>
			<div className={styles.wrapper_who}>
				{node
					&& (
						<div
							className={styles.who}
						>
							{node.name}
							<Cancel className={styles.delete_reciever} onClick={deleteReciever} />
						</div>
					)
				}

			</div>
			<div
				ref={editableDiv}
				className={styles.comment}
				onInput={handlerInput}
				contentEditable="true"
				dangerouslySetInnerHTML={{ __html: comment }}
			/>
			<SendMessage className={styles.add_message} onClick={sentComment} />
		</div>
	)
}
