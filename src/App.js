import React from 'react'

import { HeaderContainer as Header } from '@features/header'
import { BodyContainer as Body } from '@features/body'
import { styles } from './styles'

const App = () => (
	<div className={styles.app}>
		<Header />
		<Body />
	</div>
)

export default App
