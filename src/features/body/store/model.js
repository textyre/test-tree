/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export default {
	name: 'fileSystems',
	state: {
		unpreparedFile: null,
		activeNodeForComment: null
	},
	reducers: {
		setLoadedFile(state, file) {
			state.unpreparedFile = file;
			return state;
		},
		// resetLoadedFile(state, file) {
		// 	state.unpreparedFiles = []
		// 	state.unpreparedFiles.push(file);
		// 	return state;
		// },
		setActiveForCommentByKey(state, key) {
			state.activeNodeForComment = key;
			return state;
		},
		setComment(state, { comment, id }) {
			const { unpreparedFile } = state

			for (let i = 0; i < unpreparedFile.length; i++) {
				if (Number(unpreparedFile[i][0]) === Number(id)) unpreparedFile[i][3] = comment;
			}

			return state;
		}
	}
}
