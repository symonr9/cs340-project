import React from 'react'
import PropTypes from 'prop-types'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const ListCard = props => {
  return (
    <div className='o__list-card'>
      <GridListTile key={tile.img}>
        <img src={tile.img} alt={tile.title} />
        <GridListTileBar
          title={tile.title}
          subtitle={<span>by: {tile.author}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about ${tile.title}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </div>
  )
}

ListCard.propTypes = {}

export default ListCard
