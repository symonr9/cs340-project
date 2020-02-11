// Front routes

export const routes = {
  root: '/',
  login: '/login',
  newList: '/new-list ',
  edit: '/edit',
  listDetails: '/details'
}

// Hosted URL -- Uncomment on build and deploy
// export const backedBaseUrl = 'http://flip3.engr.oregonstate.edu:5959'

// Local URL
export const backedBaseUrl = 'http://localhost:5959'

//Backend routes (API)
export const backendRoutes = {
  search: `${backedBaseUrl}/search`
}
