/* eslint-disable no-shadow */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable no-console */
import React, { useCallback } from 'react'
import { AbstractNode } from './abstract-node'
import { styles } from './styles'

const GroupAbstractNode = ({
	node,
	globalVersion,
	parentVersion,
	marginLeft,
	onClickNode,
	onDeleteComment
}) => (
	<React.Fragment>
		<div className={styles.group_version}>
			{
				Object.values(node).map(({
					name,
					id,
					version: nodeVersion,
					comment,
					status,
					children
				}) => (parentVersion >= nodeVersion ? (
					<React.Fragment>
						<AbstractNode
							globalVersion={globalVersion}
							nodeVersion={nodeVersion}
							name={name}
							comment={comment}
							onClickNode={onClickNode(nodeVersion, id)}
							onDeleteComment={onDeleteComment(nodeVersion, id)}
							status={status}
							key={id + name}
						/>
						<React.Fragment>
							{
								children != null ? (
									<div
										className={styles.children}
										style={{ marginLeft: `${marginLeft + 10}px` }}
										key={id}
									>
										{
											Object.keys(children).map(childKey => (
												<GroupAbstractNode
													globalVersion={globalVersion}
													parentVersion={nodeVersion}
													node={children[childKey]}
													marginLeft={marginLeft}
													onClickNode={onClickNode}
													onDeleteComment={onDeleteComment}
												/>
											))
										}
									</div>
								) : null
							}
						</React.Fragment>
					</React.Fragment>
				) : null))
			}
		</div>
	</React.Fragment>
)

export const BodyView = ({ fileSystems, version, onClickNode, onDeleteComment }) => {
	const rootKey = Object.keys(fileSystems)[0]

	const handlerClick = useCallback((version, id) => () => {
		onClickNode(version, id)
	}, [onClickNode])

	const handlerDeleteComment = useCallback((version, id) => () => {
		onDeleteComment(version, id)
	}, [onDeleteComment])

	return (
		<div className={styles.body}>
			{fileSystems[rootKey] && (
				<GroupAbstractNode
					node={fileSystems[rootKey]}
					globalVersion={version}
					parentVersion={version}
					marginLeft={10}
					onClickNode={handlerClick}
					onDeleteComment={handlerDeleteComment}
				/>
			)}
		</div>
	)
}
