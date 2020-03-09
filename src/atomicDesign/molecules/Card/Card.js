import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Rating from 'atomicDesign/atoms/Rating/Rating'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
	root: {
		width: 300
	},
	media: {
		height: '150px',
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}))

const ItemCard = ({
	// list_item_id: listItemId,
	name: itemName,
	rating,
	image_link,
	imbd_link,
	release_date,
	plot,
	runtime
}) => {
	const classes = useStyles()
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card className={'my-3 m__card ' + classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{itemName && itemName.length > 0 ? itemName[0] : ''}
					</Avatar>
				}
				title={itemName}
				subheader={moment(release_date).format('M-DD-YYYY')}
			/>
			<CardMedia
				className={classes.media}
				image={image_link}
				title={itemName}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{plot}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					<Rating size="medium" value={(rating / 10) * 5} readOnly />
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				{/* <Chip label={genreName} color="primary" /> */}
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography
						paragraph
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{runtime}
					</Typography>
					<Typography
						paragraph
						variant="body2"
						color="textSecondary"
						component="p"
					>
						<a href={imbd_link} style={{ color: 'inherit' }}>
							{imbd_link}
						</a>
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	)
}

export default ItemCard
