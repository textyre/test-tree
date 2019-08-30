/* eslint-disable no-alert */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable no-shadow */
import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { setLoadedFileAction, resetLoadedFileAction } from '@features/body/store/actions'
import { rootIndexSelector } from '@features/body/store/selectors'
import PapaParse from 'papaparse'
import { HeaderView } from '../views/header-view'

const enhance = connect(
	state => ({
		rootIndex: rootIndexSelector(state)
	}),
	state => ({
		setLoadedFile: file => setLoadedFileAction(state, file),
		resetLoadedFile: file => resetLoadedFileAction(state, file)
	})
)

export const HeaderContainer = enhance(({ rootIndex, setLoadedFile, resetLoadedFile }) => {
	const [progress, setProgress] = useState(0);

	const updateProgress = useCallback((event) => {
		if (event.lengthComputable) {
			const percentLoaded = Math.round((event.loaded / event.total) * 100);
			if (percentLoaded <= 100) {
				setProgress(percentLoaded)
			}
		}
	}, [])

	const createTree = useCallback((event) => {
		const reader = new FileReader();
		reader.onprogress = updateProgress;
		reader.onabort = () => {
			alert('File read cancelled');
		};

		reader.onload = (event) => {
			setProgress(0)
			const result = PapaParse.parse(
				event.target.result, {}
			);

			if (Number(rootIndex) === Number(result.data[0][0])) {
				setLoadedFile(result.data)
			} else {
				resetLoadedFile(result.data)
			}
		}

		reader.readAsText(event.target.files[0]);
	}, [resetLoadedFile, rootIndex, setLoadedFile, updateProgress]);

	return (
		<HeaderView
			createTree={createTree}
			updateProgress={updateProgress}
			progress={progress}
		/>
	)
})
