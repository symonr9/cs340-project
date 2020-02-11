import React, { useState } from 'react'
import PropTypes from 'prop-types'

//To get API Data -- during this phased of the project. Lists will be mocked with API data.
// next project version, this will be replaced with the local relational database data
import { getData } from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'

import List from 'atomicDesign/organisms/List/List'

const Home = props => {
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
      <div>
        <h2>Lists other users have created</h2>
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

Home.propTypes = {}

export default Home
