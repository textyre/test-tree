/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export default {
	name: 'fileSystems',
	state: {
		unpreparedFiles: [],
		activeNodeForComment: null
	},
	reducers: {
		setLoadedFile(state, file) {
			state.unpreparedFiles.push(file);
			return state;
		},
		resetLoadedFile(state, file) {
			state.unpreparedFiles = []
			state.unpreparedFiles.push(file);
			return state;
		},
		setActiveForCommentByKey(state, key) {
			state.activeNodeForComment = key;
			return state;
		},
		setComment(state, { comment, id }) {
			const { unpreparedFiles } = state
			const lastFile = unpreparedFiles[unpreparedFiles.length - 1]

			for (let i = 0; i < lastFile.length; i++) {
				if (Number(lastFile[i][0]) === Number(id)) lastFile[i][3] = comment;
			}

			return state;
		}
	}
}
