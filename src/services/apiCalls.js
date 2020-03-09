import axios from 'axios'
import { backendRoutes } from 'siteData/routes'

/**
 * Performs HTTP GET request to obtain data
 * @function
 * @param {string} url - REQUIRED.  Fetch request URL
 * @param {function} successCb - REQUIRED. Callback function if successful request.
 * @param {function} errorCb - OPTIONAL. Callback function if error in request.
 * @returns {void} - calls success or error callback with the server response
 */

export const getData = (url, successCb, errorCb) => {
	axios
		.get(url)
		.then(response => successCb(response.data))
		.catch(error => {
			console.error(error)
			if (errorCb) errorCb(error)
		})
}

/**
 * Performs HTTP POST request
 * @function
 * @param {string} url - REQUIRED.  Fetch request URL
 * @param {function} successCb - REQUIRED. Callback function if successful request.
 * @param {function} errorCb - OPTIONAL. Callback function if error in request.
 * @returns {void} - calls success or error callback with the server response
 */

const postConfig = {
	header: {
		'Content-Type': 'application/json'
	}
}

export const postData = (url, body, successCb, errorCb) => {
	axios
		.post(url, body, postConfig)
		.then(response => successCb(response.data))
		.catch(error => {
			console.error(error)
			if (errorCb) errorCb(error)
		})
}

/**
 * Performs HTTP PATCH request
 * @function
 * @param {string} url - REQUIRED.  Fetch request URL
 * @param {function} successCb - REQUIRED. Callback function if successful request.
 * @param {function} errorCb - OPTIONAL. Callback function if error in request.
 * @returns {void} - calls success or error callback with the server response
 */

const patchConfig = {
	header: {
		'Content-Type': 'application/json'
	}
}

export const patchData = (url, body, successCb, errorCb) => {
	axios
		.patch(url, body, patchConfig)
		.then(response => successCb(response.data))
		.catch(error => {
			console.error(error)
			if (errorCb) errorCb(error)
		})
}

/**
 * Performs HTTP DELETE request
 * @function
 * @param {string} url - REQUIRED.  Fetch request URL
 * @param {function} successCb - REQUIRED. Callback function if successful request.
 * @param {function} errorCb - OPTIONAL. Callback function if error in request.
 * @returns {void} - calls success or error callback with the server response
 */

export const deleteRequest = (url, successCb, errorCb) => {
	axios
		.delete(url)
		.then(response => successCb(response.data))
		.catch(error => {
			console.error(error)
			if (errorCb) errorCb(error)
		})
}

/**
 * Default error handler for a form submit
 * @param {erro} error - Server error object instance
 * @param {function} callback - Callback of State or hook to handle update
 */

export const formSubmitServerErrorHandler = (error, callback) => {
	const errorMessage =
		error.response && error.response.data ? error.response.data : error.message
	console.error(error)
	if (callback) callback(errorMessage)
}

/**
 * Default error handler for a form submit
 * @param {erro} error - Server error object instance
 * @param {function} callback - Callback of State or hook to handle update
 */

export const removeServerSession = callback => {
	postData(backendRoutes.logout, null, callback, error => {
		formSubmitServerErrorHandler(error)
	})
}
