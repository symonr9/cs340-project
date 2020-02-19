import React, { useState } from 'react'
//To get API Data -- during this phased of the project. Lists will be mocked with API data.
// next project version, this will be replaced with the local relational database data
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import List from 'atomicDesign/organisms/List/List'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
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

  //Input value
  const [searchValue, setSearchValue] = useState('muppets')

  const getLists = () => {
    if (searchValue.length > 0) {
      getData(`${backendRoutes.search}?title=${searchValue}`, parseList)
    }
  }

  function parseList (data) {
    console.log(data)
  }

  return (
    <div className='p__home'>
      <div className={classes.root}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
          <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
      <div>
        <SectionTitle title='Greatest lists' />
        <input
          type='text'
          placeholder='Movie name'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <button onClick={getLists}>Search</button>
      <List />
    </div>
  )
}

export default Home
