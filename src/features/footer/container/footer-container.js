/* eslint-disable no-alert */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable no-shadow */
import React from 'react'
import { connect } from 'react-redux'
import { setCommentAction, setActiveForCommentByKeyAction, updateTreeAction } from '@features/body/store/actions'
import { getNodeByKeySelector } from '@features/body/store/selectors'
import { FooterView } from '../views/footer-view'

const enhance = connect(
	state => ({
		node: getNodeByKeySelector(state)
	}),
	state => ({
		setComment: (comment, id, version) => setCommentAction(state, comment, id, version),
		setActiveForCommentByKey: key => setActiveForCommentByKeyAction(state, null, key),
		updateTree: version => updateTreeAction(state, version)
	})
)

export const FooterContainer = enhance(props => (
	<FooterView {...props} />
))
