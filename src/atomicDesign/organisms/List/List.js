import React, { useEffect, useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { routes } from 'siteData/routes'
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import { defaultListImg } from 'siteData/siteConstants'
import { cssWindowQueries } from 'siteData/siteConstants'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import Media from 'react-media'
import { Badge } from 'reactstrap'
import './List.scss'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		padding: '16px 16px',
		height: '100%'
	},
	gridList: {
		maxWidth: 800
	}
}))

const mapStateToProps = state => ({
	sessionData: state.sessionData
})

const ConnectedList = ({ filter, userIsLogged, sessionData }) => {
	const classes = useStyles()
	const [lists, setLists] = useState(null)

	const { user_id: userId } = sessionData || {}

	const fetchData = isSubscribed => {
		const query = filter === 1 ? 'date' : filter === 2 ? 'likes' : 'none'
		const url =
			userIsLogged && userId
				? `${backendRoutes.listsByUser}${userId}`
				: `${backendRoutes.allLists}?sort=${query}`
		getData(url, response => {
			if (isSubscribed) setLists(response)
		})
	}

	useEffect(() => {
		let isSubscribed = true
		isSubscribed && fetchData(isSubscribed)
		return () => (isSubscribed = false)
	}, [filter])

	if (!lists) return null
	return (
		<Media queries={cssWindowQueries}>
			{matches => (
				<div className={`${classes.root} p__list`}>
					<GridList
						cellHeight={180}
						className={classes.gridList}
						cols={matches.small ? 1 : 2}
					>
						{lists.map((list, index) => {
							const {
								user_id: listOwnerId,
								owner_name: owner,
								list_name: listName,
								items,
								list_id: listId,
								number_of_likes: likes,
								date_published: publishDate
							} = list
							const listDetailUrl = `${routes.listDetails}/${listId}`

							//Verify if there is a first item image. Else, use default list image
							const imageUrl =
								items && items.length > 0 ? items[0].image_link : defaultListImg
							return (
								<GridListTile key={index}>
									<img src={imageUrl} alt={listName} />
									<GridListTileBar
										title={listName}
										subtitle={<span>by: {owner}</span>}
										actionIcon={
											<div className="row mx-auto p__list__badge-container justify-content-between">
												<div className="col-6 my-auto p-0">
													{userId && listOwnerId === userId && (
														<Link
															className="m-0"
															href={listDetailUrl}
															to={`${routes.editList}/${listId}`}
														>
															<Button
																variant="contained"
																color="secondary"
																size="small"
																className={classes.button}
																startIcon={<EditIcon />}
															>
																Edit
															</Button>
														</Link>
													)}
												</div>
												<div className="d-flex col-4 flex-column align-items-end p-0 p-md-1">
													<Link href={listDetailUrl} to={listDetailUrl}>
														<Badge color="primary">{`${likes} likes`}</Badge>
													</Link>
													<Link to={listDetailUrl}>
														<Badge color="">{`${moment(publishDate).format(
															'MM-DD-YY'
														)}`}</Badge>
													</Link>
												</div>
											</div>
										}
									/>
								</GridListTile>
							)
						})}
					</GridList>
				</div>
			)}
		</Media>
	)
}

ConnectedList.propTypes = {
	filter: PropTypes.number,
	userIsLogged: PropTypes.bool,
	sessionData: PropTypes.shape({
		first_name: PropTypes.string,
		user_id: PropTypes.number.isRequired
	})
}

ConnectedList.defaultProps = {
	user: null,
	filter: 0,
	userIsLogged: false,
	sessionData: null
}

const List = connect(mapStateToProps)(ConnectedList)

export default List
