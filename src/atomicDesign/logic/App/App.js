import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from 'siteData/routes'
import Login from 'atomicDesign/pages/Login/Login'
import CRUDPage from 'atomicDesign/pages/CRUDPage/CRUDPage'
import Home from 'atomicDesign/pages/Home/Home'
import Layout from 'atomicDesign/logic/Layout/Layout'
import ListDetails from 'atomicDesign/organisms/ListDetails/ListDetails'
import Genres from 'atomicDesign/pages/Genres/Genres'
import UserPortal from 'atomicDesign/pages/UserPortal/UserPortal'
import PrivateRoute from 'atomicDesign/logic/PrivateRoute/PrivateRoute'

const App = () => {
	const publicRoutes = [
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
			path: routes.genres,
			component: Genres
		},
		{
			exact: false,
			path: `${routes.editList}/:listId`,
			component: CRUDPage
		},
		{
			exact: false,
			path: `${routes.listDetails}/:listId`,
			component: ListDetails
		},
		{
			component: Home
		}
	]

	const privateRoutes = [
		{
			exact: true,
			path: routes.profile,
			component: UserPortal
		},
		{
			exact: false,
			path: `${routes.edit}/:listId`,
			component: CRUDPage
		},
		{
			exact: true,
			path: routes.newList,
			component: CRUDPage
		}
	]

	return (
		<BrowserRouter>
			<Layout>
				<div className="App">
					<Switch>
						{privateRoutes.map((privateRoute, index) => (
							<PrivateRoute key={`private${index}`} {...privateRoute} />
						))}
						{publicRoutes.map((route, idx) => (
							<Route key={`public ${route}.${idx}`} exact {...route} />
						))}
					</Switch>
				</div>
			</Layout>
		</BrowserRouter>
	)
}

export default App
