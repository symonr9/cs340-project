import axios from 'axios'

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
 * Performs HTTP POST request to create a new device
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
