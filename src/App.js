import React from 'react'

import { HeaderContainer as Header } from '@features/header'
import { BodyContainer as Body } from '@features/body'
import { FooterContainer as Footer } from '@features/footer'
import { styles } from './styles'

const App = () => (
	<div className={styles.app}>
		<Header />
		<Body />
		<Footer />
	</div>
)

export default App
