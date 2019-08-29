/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React from 'react'
import { connect } from 'react-redux'
import { setPreparedFileSystemsAction } from '@features/body/store/actions'
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
		setPreparedFilesSystems: fileSystems => setPreparedFileSystemsAction(state, fileSystems),
	})
)

export const BodyContainer = enhance(({
	preparedFilesSystem
}) => (
	<BodyView fileSystems={preparedFilesSystem} />
))
