/* eslint-disable no-alert */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable no-shadow */
import React from 'react'
import { connect } from 'react-redux'
import { setCommentAction } from '@features/body/store/actions'
import { getNodeByKeySelector } from '@features/body/store/selectors'
import { FooterView } from '../views/footer-view'

const enhance = connect(
	state => ({
		node: getNodeByKeySelector(state)
	}),
	state => ({
		setComment: (comment, id) => setCommentAction(state, comment, id),
	})
)

export const FooterContainer = enhance(({ setComment, node }) => (
	<FooterView setComment={setComment} node={node} />
))
