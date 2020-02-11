import React from 'react'
import PropTypes from 'prop-types'
import './SectionTitle.scss'

const SectionTitle = ({ title, styleClass }) => {
  return (
    <p className={`h5 text-center mb-4 a__section-title ${styleClass}`}>
      {title}
    </p>
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
