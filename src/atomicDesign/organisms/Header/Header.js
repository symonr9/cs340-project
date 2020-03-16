import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import logoImg from 'assets/logo.png'
import { routes } from 'siteData/routes'
import NavLink from 'atomicDesign/atoms/NavLink/NavLink'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { verifySession, removeSession } from 'services/redux/actions'
import './Header.scss'

const mapStateToProps = state => ({
	sessionData: state.sessionData
})

const mapDispatchToProps = dispatch => ({
	verifySession: () => {
		dispatch(verifySession())
	},
	removeSession: () => dispatch(removeSession())
})

const ConnectedHeader = ({ sessionData, verifySession, removeSession }) => {
	useEffect(verifySession, [])
	return (
		<div className="row m-0 p-0 m__header">
			<div className="col-12 m-0 p-0">
				<div className="row m-0 p-0 m__header__logo-title">
					<div className="col-6 h-100 d-flex align-items-center">
						<img src={logoImg} alt="Listagram logo" />
					</div>
					<div className="col-6 h-100 d-flex align-items-center justify-content-end">
						<h1 className="h2">Listagram</h1>
					</div>
				</div>
				<div className="row m-0">
					<div className="col-12 p-0 m-0">
						{!sessionData && (
							<ButtonGroup
								classes={{ root: 'm__header__site-nav' }}
								fullWidth
								aria-label="full width outlined button group"
							>
								<NavLink to={routes.home} title="Home" />
								<NavLink to={routes.login} title="Login" />}
							</ButtonGroup>
						)}
						{sessionData && (
							<ButtonGroup
								classes={{ root: 'm__header__site-nav' }}
								fullWidth
								aria-label="full width outlined button group"
							>
								<NavLink to={routes.home} title="Home" />
								<NavLink to={routes.profile} title="Profile" />
								<NavLink to={routes.newList} title="New List" />
								<NavLink to={routes.genres} title="Genres" />
								<NavLink
									to={routes.logout}
									title="Logout"
									color="default"
									action={() => {
										removeSession()
									}}
								/>
							</ButtonGroup>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

ConnectedHeader.propTypes = {
	sessionData: PropTypes.object,
	verifySession: PropTypes.func.isRequired,
	removeSession: PropTypes.func.isRequired
}

const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader)

export default Header
