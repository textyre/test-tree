/* eslint-disable no-param-reassign */
export default {
	name: 'fileSystems',
	state: {
		unpreparedFile: null,
		preparedFilesSystem: {}
	},
	reducers: {
		setLoadedFile(state, file) {
			state.unpreparedFile = file;
			return state;
		},
		setPreparedFileSystems(state, preparedFilesSystem) {
			state.preparedFilesSystem = { ...state.preparedFilesSystem, ...preparedFilesSystem };
			return state;
		}
	}
}
