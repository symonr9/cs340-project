import React from 'react'
import PropTypes from 'prop-types'
import Header from 'atomicDesign/organisms/Header/Header'

const Layout = ({ children }) => {
	return (
		<div
			className="container-md p-0 center "
			style={{ backgroundColor: '#FFF' }}
		>
			<Header />
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	])
}

export default Layout
