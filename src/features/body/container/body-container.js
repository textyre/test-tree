/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { setActiveForCommentByKeyAction, deleteCommentAction } from '@features/body/store/actions'
import {
	preparedFilesSystemSelector,
	unpreparedFilesSystemSelector
} from '@features/body/store/selectors'

import { BodyView } from '../views/body-view'

const enhance = connect(
	state => ({
		unpreparedFilesSystem: unpreparedFilesSystemSelector(state),
		preparedFilesSystem: preparedFilesSystemSelector(state),
	}),
	state => ({
		setActiveForCommentByKey: key => setActiveForCommentByKeyAction(state, key),
		deleteComment: id => deleteCommentAction(state, id),
	})
)

export const BodyContainer = enhance(({
	preparedFilesSystem,
	setActiveForCommentByKey,
	deleteComment
}) => {
	const onClickNode = useCallback((key) => {
		setActiveForCommentByKey(key);
	}, [setActiveForCommentByKey])

	const onDeleteComment = useCallback((id) => {
		deleteComment(id);
	}, [deleteComment])

	return (
		<BodyView fileSystems={preparedFilesSystem} onDeleteComment={onDeleteComment} onClickNode={onClickNode} />
	)
})
