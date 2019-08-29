/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect'

const rootSelector = createSelector(
	root => root.fileSystems,
	fileSystems => fileSystems
)

export const unpreparedFilesSystemSelector = createSelector(
	rootSelector,
	({ unpreparedFile }) => unpreparedFile
)

export const nodesTreeSelector = createSelector(
	unpreparedFilesSystemSelector,
	(data) => {
		const tree = {}

		if (data) {
			data.forEach((node) => {
				const id = node[0];
				const name = node[1];
				const rootID = node[2];

				if (!tree[rootID]) tree[rootID] = []
				tree[rootID] = [...tree[rootID], { id, name }]
			});
		} else return null;

		return tree;
	}
)

export const preparedFilesSystemSelector = createSelector(
	nodesTreeSelector,
	(nodesTree) => {
		let buildedTree = {}

		const build = (root, tree, buildingTree) => {
			tree.forEach(({ id, name }) => {
				if (root[id]) {
					buildingTree[id] = {
						name,
						children: build(root, root[id], {})
					}
				} else {
					buildingTree[id] = {
						name,
						children: null
					}
				}
			})
			return buildingTree;
		}

		if (nodesTree != null) buildedTree = build(nodesTree, nodesTree[-1], {})
		return buildedTree;
	}
)
