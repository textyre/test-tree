/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable no-console */
import React from 'react'
import { AbstractNode } from './abstract-node'
import { styles } from './styles'

const GroupAbstractNode = ({ node, marginLeft }) => (
	<React.Fragment>
		<AbstractNode name={node.name} key={node.name} />
		{
			Object.keys(node.children).map((key) => {
				const nextNode = node.children[key];
				if (nextNode.children != null) {
					return (
						<React.Fragment>
							<div style={{ marginLeft: `${marginLeft + 10}px` }}>
								<GroupAbstractNode node={nextNode} marginLeft={marginLeft} />
							</div>
						</React.Fragment>
					)
				}
				return <AbstractNode name={nextNode.name} key={nextNode.name} marginLeft={marginLeft + 10} />
			})
		}
	</React.Fragment>
)

export const BodyView = ({ fileSystems }) => {
	console.log(fileSystems);

	return (
		<div className={styles.body}>
			{fileSystems[0] && <GroupAbstractNode node={fileSystems[0]} marginLeft={10} />}
		</div>
	)
}
