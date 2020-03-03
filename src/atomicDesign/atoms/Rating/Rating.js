import React from 'react'
import PropTypes from 'prop-types'
import RatingHOC from '@material-ui/lab/Rating'

const Rating = ({ size, readOnly, value }) => {
	return <RatingHOC defaultValue={value} size={size} readOnly={readOnly} />
}

Rating.propTypes = {
	size: PropTypes.string,
	readOnly: PropTypes.bool,
	value: PropTypes.number,
}
Rating.defaultProps = {
	size: 'medium',
	readOnly: false,
	value: 0,
}
export default Rating
