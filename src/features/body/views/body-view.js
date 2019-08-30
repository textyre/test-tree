/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable no-console */
import React, { useCallback } from 'react'
import { AbstractNode } from './abstract-node'
import { styles } from './styles'

const GroupAbstractNode = ({ keyNode, node, marginLeft, onClickNode, onDeleteComment }) => {
	const handlerClick = useCallback(id => () => {
		onClickNode(id)
	}, [onClickNode])

	const handlerDeleteComment = useCallback(id => () => {
		onDeleteComment(id)
	}, [onDeleteComment])

	return (
		<React.Fragment>
			<AbstractNode
				name={node.name}
				comment={node.comment}
				key={node.name + keyNode}
				onClickNode={handlerClick(keyNode)}
				onDeleteComment={handlerDeleteComment(keyNode)}
				status={node.status}
			/>
			{
				Object.keys(node.children).map((key) => {
					const nextNode = node.children[key];
					if (nextNode.children != null) {
						return (
							<React.Fragment key={key}>
								<div style={{ marginLeft: `${marginLeft + 10}px` }} key={key}>
									<GroupAbstractNode
										keyNode={key}
										node={nextNode}
										marginLeft={marginLeft}
										onClickNode={onClickNode}
										onDeleteComment={onDeleteComment}
									/>
								</div>
							</React.Fragment>
						)
					}
					return (
						<AbstractNode
							name={nextNode.name}
							comment={nextNode.comment}
							marginLeft={marginLeft + 10}
							onClickNode={handlerClick(key)}
							onDeleteComment={handlerDeleteComment(key)}
							key={nextNode.name + key}
							status={nextNode.status}
						/>
					)
				})
			}
		</React.Fragment>
	)
}

export const BodyView = ({ fileSystems, onClickNode, onDeleteComment }) => {
	const rootKey = Object.keys(fileSystems)[0]

	return (
		<div className={styles.body}>
			{fileSystems[rootKey] && (
				<GroupAbstractNode
					keyNode={rootKey}
					node={fileSystems[rootKey]}
					marginLeft={10}
					onClickNode={onClickNode}
					onDeleteComment={onDeleteComment}
				/>
			)}
		</div>
	)
}
