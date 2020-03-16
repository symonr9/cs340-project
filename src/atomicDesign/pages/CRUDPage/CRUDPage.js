import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import SectionHeaderLabel from 'atomicDesign/atoms/SectionHeaderLabel/SectionHeaderLabel'
import List from 'atomicDesign/organisms/List/List'
import { Button, Form } from 'react-bootstrap'
import {
	getGenreList,
	getData,
	postData,
	deleteRequest,
	patchData
} from 'services/apiCalls'
import { backendRoutes } from 'siteData/routes'
import Snackbar from 'atomicDesign/molecules/SnackBar/SnackBar'
import { useObject, useInputText, useBool } from 'services/hooks'
import Loader from 'atomicDesign/atoms/Loader/Loader'
import { connect } from 'react-redux'
import { routes } from 'siteData/routes'
import GenreSelect from 'atomicDesign/molecules/GenreSelect/GenreSelect'

const mapStateToProps = state => ({
	sessionData: state.sessionData
})

const ConnectedCRUDPage = props => {
	const { sessionData, match } = props

	const { listId: editListId } = match.params

	// debugger

	const { user_id: userId, first_name: firstName } = sessionData || {}

	//Loading
	const [loading, setLoading] = useState(true)

	//Snackbar state
	const { content: snackbarProps, updateVal, mergeObj } = useObject({
		success: false,
		message: '',
		open: false
	})

	//Genre list
	const [genres, setGenres] = useState(null)

	//Genre selected
	const [genreSelect, setGenreSelect] = useState(null)

	//Name val
	const {
		val: listNameVal,
		setVal: setListNameVal,
		setStringVal: setListNameValStr
	} = useInputText()

	//Redirect
	const { val: toRedirect, toggleVal: activateRedirect } = useBool()

	const handleClose = () => {
		updateVal('open', false)
	}

	const handleSubmitForm = event => {
		event.preventDefault()
		if (!editListId) handleCreateNewList()
		else handleEditCurrentList()
	}

	function handleCreateNewList(event) {
		const url = `${backendRoutes.listDetails}/new`
		postData(
			url,
			{
				name: listNameVal,
				genres: genreSelect
					? genreSelect.map(genreSelect => genreSelect.value)
					: [],
				user_id: userId
			},
			activateRedirect,
			handleReqError
		)
	}

	function handleEditCurrentList() {
		const url = `${backendRoutes.editList}`
		patchData(
			url,
			{
				name: listNameVal,
				genres: genreSelect
					? genreSelect.map(genreSelect => genreSelect.value)
					: [],
				listId: editListId
			},
			activateRedirect,
			handleReqError
		)
	}

	//Get lists of genres
	const handleGetGenres = callback => {
		setLoading(true)
		getGenreList(
			genres => {
				setGenres(genres)
				setLoading(false)
			},
			callback,
			handleReqError
		)
	}

	const getEditListData = () => {
		if (editListId) {
			// setLoading(true)
			getData(
				`${backendRoutes.listDetails}/${editListId}`,
				response => {
					const { name } = response

					// Get genres for thes specific list
					getData(
						`${backendRoutes.genresByListId}/${editListId}`,
						editListGenres => {
							setListNameValStr(name)
							if (editListGenres && editListGenres.length > 0) {
								setGenreSelect(
									editListGenres.map(genre => ({
										value: genre.genre_id,
										label: genre.name
									}))
								)
							}
						}
					)
				},
				handleReqError
			)
		}
	}

	function handleReqError(error) {
		const message =
			error.response && error.response.data && error.response.data.message
				? error.response.data.message
				: error.message
				? error.message
				: 'Unknown error'
		mergeObj({
			success: false,
			message,
			open: true
		})
	}

	useEffect(() => {
		let isSubscribed = true
		if (isSubscribed) handleGetGenres()
		return () => (isSubscribed = false)
	}, [])

	useEffect(() => {
		let isSubscribed = true
		if (isSubscribed && editListId) getEditListData()
		return () => (isSubscribed = false)
	}, [editListId])

	const title = !editListId ? 'Create new list' : "Let's edit "
	if (toRedirect) return <Redirect to={routes.profile} />
	if (loading) return <Loader />
	return (
		<div className="container">
			<SectionHeaderLabel content={title} />
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<Form onSubmit={handleSubmitForm}>
						<Form.Group controlId="listName">
							<Form.Label>List name</Form.Label>
							<Form.Control
								as="input"
								type="text"
								placeholder="New list name"
								value={listNameVal}
								onChange={setListNameVal}
							/>
							<Form.Text className="text-muted">
								Let's create a cool list
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="genreList">
							<Form.Label>Genre</Form.Label>
							<GenreSelect
								options={
									genres &&
									genres.map(genre => ({
										value: genre.genre_id,
										label: genre.genre_name
									}))
								}
								value={genreSelect}
								onChange={setGenreSelect}
							/>
						</Form.Group>
						<div className="row justify-content-center">
							<div className="col-12 col-md-6">
								<Button
									variant="primary"
									type="submit"
									style={{ width: '100%', margin: '0' }}
								>
									Submit
								</Button>
							</div>
						</div>
						<Snackbar {...snackbarProps} handleClose={handleClose} />
					</Form>
				</div>
			</div>
			<div className="row justify-content-center">
				<SectionHeaderLabel content={`${firstName}'s current lists`} />
			</div>
			<List userIsLogged />
		</div>
	)
}

const CRUDPage = connect(mapStateToProps)(ConnectedCRUDPage)
CRUDPage.propTypes = {
	sessionData: PropTypes.shape({
		first_name: PropTypes.string,
		user_id: PropTypes.number.isRequired
	})
}

export default CRUDPage
