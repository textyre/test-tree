/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { setActiveForCommentByKeyAction, deleteCommentAction, updateTreeAction } from '@features/body/store/actions'
import {
	fileSystemSelector,
	versionSelector,
	treeLinksSelector
} from '@features/body/store/selectors'

import { BodyView } from '../views/body-view'

const enhance = connect(
	state => ({
		version: versionSelector(state),
		fileSystems: fileSystemSelector(state),
		tree: treeLinksSelector(state)
	}),
	state => ({
		setActiveForCommentByKey: (version, key) => setActiveForCommentByKeyAction(state, version, key),
		deleteComment: (version, id) => deleteCommentAction(state, version, id),
		updateTree: version => updateTreeAction(state, version)
	})
)

export const BodyContainer = enhance(({
	setActiveForCommentByKey,
	deleteComment,
	updateTree,
	...props
}) => {
	// console.log(props.tree);
	// console.log(props.fileSystems);

	const onClickNode = useCallback((version, key) => {
		setActiveForCommentByKey(version, key);
	}, [setActiveForCommentByKey])

	const onDeleteComment = useCallback((version, id) => {
		deleteComment(version - 1, id);
		updateTree(version - 1);
	}, [deleteComment, updateTree])

	return (
		<BodyView {...props} onDeleteComment={onDeleteComment} onClickNode={onClickNode} />
	)
})
