const selectFeature = state => state.fileSystems

export const setLoadedFileAction = (state, file) => {
	selectFeature(state).setLoadedFile(file)
}

export const setActiveForCommentByKeyAction = (state, key) => {
	selectFeature(state).setActiveForCommentByKey(key)
}

export const setCommentAction = (state, comment, id) => {
	selectFeature(state).setComment({ comment, id })
}

export const deleteCommentAction = (state, id) => {
	selectFeature(state).deleteComment(id)
}

export const resetLoadedFileAction = (state, file) => {
	selectFeature(state).resetLoadedFile(file)
}
