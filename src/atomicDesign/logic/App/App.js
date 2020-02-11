import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from 'siteData/routes'
import Login from 'atomicDesign/pages/Login/Login'
import CRUDPage from 'atomicDesign/pages/CRUDPage/CRUDPage'
import Home from 'atomicDesign/pages/Home/Home'
import Layout from 'atomicDesign/logic/Layout/Layout'
import List from 'atomicDesign/organisms/List/List'

function App () {
  const routeList = [
    {
      exact: true,
      path: routes.login,
      component: Login
    },
    {
      exact: true,
      path: routes.newList,
      component: CRUDPage
    },
    {
      exact: true,
      path: `${routes.edit}`,
      component: CRUDPage
    },
    {
      exact: false,
      path: `${routes.edit}/:listId`,
      component: CRUDPage
    },
    {
      exact: false,
      path: `${routes.listDetails}/:listId`,
      component: List
    },
    {
      component: Home
    }
  ]
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routeList.map((route, idx) => (
              <Route key={`${route}.${idx}`} exact {...route} />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
