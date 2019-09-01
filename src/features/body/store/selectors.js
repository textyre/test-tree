/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect'

const KEY_NODE = 0;
const NAME_NODE = 1;

const rootSelector = createSelector(
	root => root.fileSystems,
	fileSystems => fileSystems
)

export const unpreparedFilesSystemSelector = createSelector(
	rootSelector,
	({ unpreparedFiles }) => unpreparedFiles
)

export const versionSelector = createSelector(
	rootSelector,
	({ version }) => version
)

export const rootIndexSelector = createSelector(
	rootSelector,
	({ unpreparedFiles }) => {
		if (unpreparedFiles.length) {
			return unpreparedFiles[unpreparedFiles.length - 1].file[KEY_NODE][KEY_NODE];
		} return 0;
	}
)

export const fileSystemSelector = createSelector(
	rootSelector,
	({ preparedSystem }) => preparedSystem
)

export const treeLinksSelector = createSelector(
	rootSelector,
	({ treeLinks }) => treeLinks
)

const activeNodeForCommentSelector = createSelector(
	rootSelector,
	({ activeNodeForComment }) => activeNodeForComment
)

const actvieNodeVersionForCommentSelector = createSelector(
	rootSelector,
	({ actvieNodeVersionForComment }) => actvieNodeVersionForComment
)

export const getNodeByKeySelector = createSelector(
	unpreparedFilesSystemSelector,
	activeNodeForCommentSelector,
	actvieNodeVersionForCommentSelector,
	(files, key, version) => {
		if (key != null) {
			const { file } = files[version - 1];
			for (let i = 0; i < file.length; i++) {
				if (Number(file[i][KEY_NODE]) === Number(key)) {
					return { name: file[i][NAME_NODE], key: Number(key), version }
				}
			}
			return null;
		} return key
	}
)
