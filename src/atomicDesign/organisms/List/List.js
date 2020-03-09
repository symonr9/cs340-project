import React, { useEffect, useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { routes } from 'siteData/routes'
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import { defaultListImg } from 'siteData/siteConstants'
import { cssWindowQueries } from 'siteData/siteConstants'
import Media from 'react-media'
import { Badge } from 'reactstrap'
import './List.scss'

const useStyles = makeStyles(theme => ({
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

const List = ({ filter, userId }) => {
	const classes = useStyles()
	const [lists, setLists] = useState(null)
	const [redirect, toRedirect] = useState(null)

	const fetchData = isSubscribed => {
		const query = filter === 1 ? 'date' : filter === 2 ? 'likes' : 'none'
		const url = !userId
			? `${backendRoutes.allLists}?sort=${query}`
			: `${backendRoutes.listsByUser}${userId}`
		getData(url, response => {
			if (isSubscribed) setLists(response)
		})
	}

	useEffect(() => {
		let isSubscribed = true
		isSubscribed && fetchData(isSubscribed)
		return () => (isSubscribed = false)
	}, [filter])

	if (redirect) return <Redirect to={redirect} />
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
								owner_name: owner,
								list_name: listName,
								items,
								list_id: listId,
								number_of_likes: likes,
								date_published: publishDate
							} = list
							//Verify if there is a first item image. Else, use default list image
							const imageUrl =
								items && items.length > 0 ? items[0].image_link : defaultListImg
							return (
								<GridListTile
									key={index}
									onClick={() => {
										toRedirect(`${routes.listDetails}/${listId}`)
									}}
								>
									<img src={imageUrl} alt={listName} />
									<GridListTileBar
										title={listName}
										subtitle={<span>by: {owner}</span>}
										actionIcon={
											<div className="row mx-auto p__list__badge-container">
												<h6 className="col text-right">
													<Badge color="">{`${moment(publishDate).format(
														'MM-DD-YY'
													)}`}</Badge>
												</h6>
												<h6 className="col text-right">
													<Badge color="primary">{`${likes} likes`}</Badge>
												</h6>
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

List.propTypes = {
	userId: PropTypes.number,
	filter: PropTypes.number
}

List.defaultProps = {
	user: null,
	filter: 0
}

export default List
