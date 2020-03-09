import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'

const SectionHeaderLabel = ({ content }) => {
	return (
		<div className="row justify-content-center mt-2">
			<SectionTitle title={content} />
		</div>
	)
}

SectionHeaderLabel.propTypes = {
	content: PropTypes.string
}

SectionHeaderLabel.defaultProps = {
	content: ''
}

export default SectionHeaderLabel
