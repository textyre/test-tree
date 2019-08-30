/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect'

const KEY_NODE = 0;
const NAME_NODE = 1;
const ROOT_NODE = 2;
const COMMENT_NODE = 3;
const STATUS = 4;

const EDITABLE = 'EDITABLE';
const NOT_EDITABLE = 'NOT_EDITABLE';
const NEW = 'NEW';
const OLD = 'OLD';

const rootSelector = createSelector(
	root => root.fileSystems,
	fileSystems => fileSystems
)

export const unpreparedFilesSystemSelector = createSelector(
	rootSelector,
	({ unpreparedFiles }) => unpreparedFiles
)

export const rootIndexSelector = createSelector(
	rootSelector,
	({ unpreparedFiles }) => {
		if (unpreparedFiles.length) {
			return unpreparedFiles[unpreparedFiles.length - 1][KEY_NODE][KEY_NODE];
		} return 0;
	}
)

export const nodesTreeSelector = createSelector(
	unpreparedFilesSystemSelector,
	(files) => {
		const tree = {}
		if (files.length) {
			const freshVersion = files.length - 1;
			const fewFersion = files.length > 1;

			files.forEach((data, index) => {
				data.forEach((node) => {
					const id = node[KEY_NODE];
					const name = node[NAME_NODE];
					const rootID = node[ROOT_NODE];
					const comment = node[COMMENT_NODE];
					let status = node[STATUS];

					if (fewFersion) {
						if (index === freshVersion) status = NEW;
						if (fewFersion && index < freshVersion) status = OLD;
					} else {
						status = NOT_EDITABLE;
					}

					if (!tree[rootID]) tree[rootID] = []
					tree[rootID] = [...tree[rootID], { id, name, comment, status }]
				});
			});
		} else return null;
		console.log(tree);

		return tree;
	}
)

export const preparedFilesSystemSelector = createSelector(
	nodesTreeSelector,
	(nodesTree) => {
		let buildedTree = {}
		const build = (root, tree, buildingTree) => {
			tree.forEach(({ id, name, comment, status }) => {
				if (root[id]) {
					if (buildingTree[id]) {
						buildingTree[id].name = name;
						buildingTree[id].status = EDITABLE;
					} else {
						buildingTree[id] = {
							name,
							children: build(root, root[id], {}),
							comment,
							status
						}
					}
				} else {
					buildingTree[id] = {
						name,
						children: null,
						comment,
						status
					}
				}
			})
			return buildingTree;
		}

		if (nodesTree != null) buildedTree = build(nodesTree, nodesTree[-1], {})
		console.log(buildedTree);

		return buildedTree;
	}
)

const activeNodeForCommentSelector = createSelector(
	rootSelector,
	({ activeNodeForComment }) => activeNodeForComment
)

export const getNodeByKeySelector = createSelector(
	unpreparedFilesSystemSelector,
	activeNodeForCommentSelector,
	(nodes, key) => {
		if (key != null) {
			for (let i = 0; i < nodes.length; i++) {
				if (nodes[i][KEY_NODE] === key) return { name: nodes[i][NAME_NODE], key }
			}
			return null;
		} return key
	}
)
