import React from 'react'
import PropTypes from 'prop-types'
import UserInfo from 'atomicDesign/organisms/UserInfo/UserInfo'
import SectionHeaderLabel from 'atomicDesign/atoms/SectionHeaderLabel/SectionHeaderLabel'
import List from 'atomicDesign/organisms/List/List'

const UserPortal = () => {
	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<UserInfo />
			</div>
			<SectionHeaderLabel content={'Lists by user'} />
			<List userIsLogged />
		</div>
	)
}

UserPortal.propTypes = {
	sessionData: PropTypes.shape({
		userId: PropTypes.number
	})
}

export default UserPortal
