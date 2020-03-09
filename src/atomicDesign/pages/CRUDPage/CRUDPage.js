import React from 'react'
// import PropTypes from 'prop-types';

import './CRUDPage.scss'
// import unirest from 'unirest';

import ListForm from 'atomicDesign/organisms/ListForm/ListForm'

class CreateListForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			movies: [],
			listName: 'My New List',
			genre: 'My Genre'
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.sendRequest = this.sendRequest.bind(this)
		this.submitList = this.submitList.bind(this)
	}

	sendRequest = title => {
		let current = this
		fetch(
			'https://movie-database-imdb-alternative.p.rapidapi.com/?plot=short&r=json&s=' +
				encodeURIComponent(title.trim()),
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
					'x-rapidapi-key': 'bd133f25famsh0d6856dee426e57p14b362jsn6da558257de1'
				}
			}
		)
			.then(response => {
				return response.json()
			})
			.then(function(data) {
				const movieData = data
				current.setState({ movies: movieData.Search })
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleChange(event) {
		this.setState({ listName: event.target.value })
	}

	handleSubmit(event) {
		console.log(this.state.value)
		event.preventDefault()
	}

	submitList(event) {
		alert('New list submitted!')
	}

	render() {
		return (
			<ListForm
				submitList={this.submitList}
				sendRequest={this.sendRequest}
				movies={this.state.movies}
				listName={this.state.listName}
				genre={this.state.genre}
			/>
		)
	}
}

const CRUDPage = props => {
	return (
		<div>
			<br />
			<br />
			<CreateListForm />
		</div>
	)
}

CRUDPage.propTypes = {}

export default CRUDPage
