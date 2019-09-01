/* eslint-disable no-alert */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable no-shadow */
import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { pushLoadedFileAction, prepareFileSystemAction } from '@features/body/store/actions'
import { rootIndexSelector, versionSelector } from '@features/body/store/selectors'
import PapaParse from 'papaparse'
import { HeaderView } from '../views/header-view'

const enhance = connect(
	state => ({
		rootIndex: rootIndexSelector(state),
		version: versionSelector(state)
	}),
	state => ({
		pushLoadedFile: (file, isResetAndPush) => pushLoadedFileAction(state, file, isResetAndPush),
		prepareFileSystem: version => prepareFileSystemAction(state, version)
	})
)

export const HeaderContainer = enhance(({ rootIndex, version, pushLoadedFile, prepareFileSystem }) => {
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
				pushLoadedFile(result.data)
			} else {
				pushLoadedFile(result.data, true)
			}

			prepareFileSystem(version);
		}

		reader.readAsText(event.target.files[0]);
	}, [prepareFileSystem, pushLoadedFile, rootIndex, updateProgress, version]);

	return (
		<HeaderView
			createTree={createTree}
			updateProgress={updateProgress}
			progress={progress}
		/>
	)
})
