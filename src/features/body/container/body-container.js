/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { setActiveForCommentByKeyAction } from '@features/body/store/actions'
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
	})
)

export const BodyContainer = enhance(({
	preparedFilesSystem,
	setActiveForCommentByKey
}) => {
	const onClickNode = useCallback((key) => {
		setActiveForCommentByKey(key);
	}, [setActiveForCommentByKey])

	return (
		<BodyView fileSystems={preparedFilesSystem} onClickNode={onClickNode} />
	)
})
