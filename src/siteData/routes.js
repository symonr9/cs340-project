// Front routes
export const routes = {
	root: '/',
	login: '/login',
	newList: '/new-list',
	editList: '/edit-list',
	listDetails: '/details',
	genres: '/genres',
	profile: '/profile',
	logout: '/logout'
}

// Hosted URL
export const backendBaseUrl = process.env.REACT_APP_API

//Backend routes (API)
export const backendRoutes = {
	search: `${backendBaseUrl}/search`,
	login: `${backendBaseUrl}/login`,
	signup: `${backendBaseUrl}/signup`,
	logout: `${backendBaseUrl}/logout`,
	allLists: `${backendBaseUrl}/lists/all`,
	listDetails: `${backendBaseUrl}/lists`,
	listsByUser: `${backendBaseUrl}/lists/user?id=`,
	editList: `${backendBaseUrl}/lists/edit-list`,
	genres: `${backendBaseUrl}/genres`,
	genresByListId: `${backendBaseUrl}/genres/by-list-id`
}
