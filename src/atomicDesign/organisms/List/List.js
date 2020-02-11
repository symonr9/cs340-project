import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import './List.scss'
import { orange } from '@material-ui/core/colors'

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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const test =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuYhB2GrISQ2BkekInQZB44sl2IZK3wl6wOzEKL5CNOp5yjZs&s'

const tileData = [
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  },
  {
    img: test,
    title: 'Image',
    author: 'author'
  }
]

const List = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
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
        ))}
      </GridList>
    </div>
  )
}

List.propTypes = {}

export default List
