const selectFeature = state => state.fileSystems

export const pushLoadedFileAction = (state, file, isResetAndPush) => {
	selectFeature(state).pushLoadedFile({ file, isResetAndPush })
	if (isResetAndPush) selectFeature(state).resetTree()
}

export const prepareFileSystemAction = (state, version) => {
	selectFeature(state).cretateLinks(version);
	selectFeature(state).createTree();
}

export const updateTreeAction = (state, version) => {
	selectFeature(state).updateTree(version);
	selectFeature(state).createTree();
}

export const setActiveForCommentByKeyAction = (state, version, key) => {
	selectFeature(state).setActiveForCommentByKey({ version, key })
}

export const setCommentAction = (state, comment, id, version) => {
	selectFeature(state).setComment({ comment, id, version })
}

export const deleteCommentAction = (state, version, id) => {
	selectFeature(state).deleteComment({ version, id })
}
