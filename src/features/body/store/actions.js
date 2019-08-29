const selectFeature = state => state.fileSystems

export const setLoadedFileAction = (state, file) => {
	selectFeature(state).setLoadedFile(file)
}

export const setPreparedFileSystemsAction = (state, fileSystems) => {
	selectFeature(state).setPreparedFileSystems(fileSystems)
}
