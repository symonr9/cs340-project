import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { routes } from 'siteData/routes'
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import { defaultListImg } from 'siteData/siteConstants'
import { cssWindowQueries } from 'siteData/siteConstants'
import Chip from '@material-ui/core/Chip'
import Media from 'react-media'
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
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
	}
}))

const List = ({ filter }) => {
	const classes = useStyles()
	const [lists, setLists] = useState(null)
	const [redirect, toRedirect] = useState(null)

	const fetchData = () => {
		const query = filter === 1 ? 'date' : filter === 2 ? 'likes' : ''
		getData(`${backendRoutes.allLists}?sort=${query}`, response => {
			setLists(response)
		})
	}

	useEffect(fetchData, [filter])
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
								list_id: listId
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
											<IconButton
												aria-label={`info about ${owner}`}
												className={classes.icon}
											>
												{/* <Chip label={genre} color="primary" /> */}
											</IconButton>
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

export default List
