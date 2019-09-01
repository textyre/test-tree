/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export default {
	name: 'fileSystems',
	state: {
		unpreparedFiles: [],
		treeLinks: {},
		preparedSystem: {},
		activeNodeForComment: null,
		actvieNodeVersionForComment: 0,
		version: 0,
		INDEXES: {
			KEY_NODE: 0,
			NAME_NODE: 1,
			ROOT_NODE: 2,
			COMMENT: 3
		},
		STATES: {
			RENAME: 'RENAME',
			REINDEX: 'REINDEX',
			NOT_EDITABLE: 'NOT_EDITABLE',
			NEW: 'NEW',
			REMOVED: 'REMOVED'
		}
	},
	reducers: {
		pushLoadedFile(state, { file, isResetAndPush = false }) {
			if (isResetAndPush) {
				state.unpreparedFiles = []
				state.version = 1;
				state.unpreparedFiles.push({ file, isPrepared: false })
			} else {
				state.version += 1;
				state.unpreparedFiles.push({ file, isPrepared: false })
			}
			return state;
		},
		cretateLinks(state, version) {
			const { unpreparedFiles } = state;
			const { treeLinks: tree } = state;

			if (unpreparedFiles.length) {
				const { file } = unpreparedFiles[version];
				version = unpreparedFiles.length;

				file.forEach((node) => {
					const id = Number(node[state.INDEXES.KEY_NODE]);
					const name = node[state.INDEXES.NAME_NODE];
					const rootID = node[state.INDEXES.ROOT_NODE];
					const comment = node[state.INDEXES.COMMENT];

					const byKey = id;
					const byName = name;

					if (!tree[rootID]) tree[rootID] = {}

					if (!tree[rootID][byKey]) {
						tree[rootID] = {
							...tree[rootID],
							[id]: {
								...tree[rootID][id],
								[name]: { id, name, comment, version, status: state.STATES.NEW }
							}
						}
					} else if (tree[rootID][byKey] && !tree[rootID][byKey][byName]) {
						tree[rootID] = {
							...tree[rootID],
							[id]: {
								...tree[rootID][id],
								[name]: { id, name, comment, version, status: state.STATES.RENAME }
							}
						}
					} else {
						tree[rootID] = {
							...tree[rootID],
							[id]: {
								...tree[rootID][id],
								[name]: { id, name, comment, version, status: state.STATES.NOT_EDITABLE }
							}
						}
					}
				});
			}
			return state;
		},
		updateTree(state, version) {
			const { unpreparedFiles } = state;
			const { treeLinks: tree } = state;

			if (unpreparedFiles.length) {
				const { file } = unpreparedFiles[version];
				version = unpreparedFiles.length;

				file.forEach((node) => {
					const id = Number(node[state.INDEXES.KEY_NODE]);
					const name = node[state.INDEXES.NAME_NODE];
					const rootID = node[state.INDEXES.ROOT_NODE];
					const comment = node[state.INDEXES.COMMENT];

					tree[rootID][id][name] = {
						...tree[rootID][id][name],
						...{ id, name, comment }
					}
				});
			}
			return state;
		},
		createTree(state) {
			const create = (root, tree, buildingTree, versionParent) => {
				Object.keys(tree).forEach((key) => {
					Object.values(tree[key]).forEach(({ id, name, comment, status, version }) => {
						if (!buildingTree[key]) buildingTree[key] = {}

						if (root[id] && versionParent === version) {
							buildingTree[key][name] = {
								id,
								name,
								children: create(root, root[id], {}, version),
								comment,
								status,
								version
							}
						} else {
							buildingTree[key][name] = {
								id,
								name,
								children: null,
								comment,
								status,
								version
							}
						}
					})
				})
				return buildingTree;
			}

			const { unpreparedFiles } = state;
			const unpreparedFilesLength = unpreparedFiles.length;

			if (state.treeLinks != null) {
				state.preparedSystem = create(
					state.treeLinks,
					state.treeLinks[-1],
					{},
					unpreparedFilesLength
				)
			}

			unpreparedFiles[unpreparedFilesLength - 1].isPrepared = true;

			return state;
		},
		resetTree(state) {
			state.treeLinks = {}
			return state;
		},
		setActiveForCommentByKey(state, { version, key }) {
			state.actvieNodeVersionForComment = version;
			state.activeNodeForComment = key;
			return state;
		},
		setComment(state, { comment, version, id }) {
			const { unpreparedFiles } = state
			const { file } = unpreparedFiles[version];

			for (let i = 0; i < file.length; i++) {
				if (Number(file[i][0]) === Number(id)) file[i][3] = comment;
			}

			return state;
		},
		deleteComment(state, { version, id }) {
			const { unpreparedFiles } = state
			const { file } = unpreparedFiles[version];

			for (let i = 0; i < file.length; i++) {
				if (Number(file[i][0]) === Number(id)) file[i][3] = null;
			}

			return state;
		}
	}
}
