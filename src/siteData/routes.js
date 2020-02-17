// Front routes
export const routes = {
  root: '/',
  login: '/login',
  newList: '/new-list',
  edit: '/edit',
  listDetails: '/details',
  genres: '/genres',
  profile: '/profile'
}

// Hosted URL -- Uncomment on build and deploy
// export const backendBaseUrl = 'http://flip3.engr.oregonstate.edu:5959'

// Local URL
export const backendBaseUrl = 'http://localhost:5959'

//Backend routes (API)
export const backendRoutes = {
  search: `${backendBaseUrl}/search`,
  login: `${backendBaseUrl}/login`,
  signup: `${backendBaseUrl}/singup`,
  logout: `${backendBaseUrl}/logout`
}
