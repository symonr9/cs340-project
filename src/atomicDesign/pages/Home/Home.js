import React, { useState } from 'react'
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import List from 'atomicDesign/organisms/List/List'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'

import FolderIcon from '@material-ui/icons/Folder'
import { makeStyles } from '@material-ui/core/styles'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'

const useStyles = makeStyles({
	root: {
		width: '100%',
		backgroundColor: 'rgb(230, 238, 244)'
	}
})

const Home = () => {
	const classes = useStyles()

	//Filter values
	const [value, setValue] = useState(0)

	return (
		<div className="p__home">
			<div className={classes.root}>
				{/* Pending genre filter */}
				<BottomNavigation
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}
					showLabels
					className={classes.root}
				>
					<BottomNavigationAction label="All" icon={<FolderIcon />} />
					<BottomNavigationAction label="Most Recent" icon={<RestoreIcon />} />
					<BottomNavigationAction label="Most liked" icon={<FavoriteIcon />} />
				</BottomNavigation>
			</div>
			<List filter={value} />
		</div>
	)
}

export default Home
