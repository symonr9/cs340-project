import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserInfo from 'atomicDesign/organisms/UserInfo/UserInfo'
import SectionHeaderLabel from 'atomicDesign/atoms/SectionHeaderLabel/SectionHeaderLabel'
import List from 'atomicDesign/organisms/List/List'

const mapStateToProps = state => ({
	sessionData: state.sessionData
})

const ConnectedUserPortal = ({ sessionData }) => {
	if (!sessionData) return null
	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<UserInfo />
			</div>
			<SectionHeaderLabel content={'Lists by user'} />
			<List userId={sessionData.user_id} />
		</div>
	)
}

ConnectedUserPortal.propTypes = {
	sessionData: PropTypes.shape({
		userId: PropTypes.number
	})
}

const UserPortal = connect(mapStateToProps)(ConnectedUserPortal)

export default UserPortal
