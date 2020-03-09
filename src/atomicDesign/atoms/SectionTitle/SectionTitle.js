import React from 'react'
import PropTypes from 'prop-types'
import './SectionTitle.scss'

const SectionTitle = ({ title, styleClass }) => {
	return (
		<h5 className={`h5 text-center a__section-title ${styleClass}`}>{title}</h5>
	)
}

SectionTitle.propTypes = {
	title: PropTypes.string,
	styleClass: PropTypes.string
}

SectionTitle.defautlProps = {
	title: '',
	styleClass: ''
}

export default SectionTitle
