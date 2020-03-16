import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { backendRoutes } from 'siteData/routes'
import {
	getGenreList,
	postData,
	deleteRequest,
	patchData
} from 'services/apiCalls'
import SectionHeaderLabel from 'atomicDesign/atoms/SectionHeaderLabel/SectionHeaderLabel'
import { green, orange } from '@material-ui/core/colors'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'
import Snackbar from 'atomicDesign/molecules/SnackBar/SnackBar'
import { useObject } from 'services/hooks'
import GenreEditField from 'atomicDesign/molecules/GenreEditField/GenreEditField'

const useStyles = makeStyles(() => ({
	table: {
		width: '100%'
	},
	tableBackground: {
		minHeight: '100%'
	},
	wrapper: {
		minHeight: '100%'
	}
}))

const Genres = () => {
	const classes = useStyles()

	//Genre list
	const [genres, setGenres] = useState(null)

	//Create genre input
	const [newGenreVal, setNewGenVal] = useState('')

	//Snackbar state
	const { content: snackbarProps, updateVal, mergeObj } = useObject({
		success: false,
		message: '',
		open: false
	})

	const handleClose = () => {
		updateVal('open', false)
	}

	//Post genre list
	const addGenre = event => {
		event.preventDefault()
		if (newGenreVal.length > 0) {
			const body = {
				genre_name: newGenreVal
			}
			postData(
				`${backendRoutes.genres}/`,
				body,
				response =>
					handleReqSuccess(`${response.genre_name} created successfully`),
				handleReqError
			)
		}
	}

	//Update value
	const handleEdit = (genreId, newName) => {
		patchData(
			`${backendRoutes.genres}/`,
			{ id: genreId, newValue: newName },
			() => handleReqSuccess(`${newName} was update successfully`),
			handleReqError
		)
	}

	const handleDelete = (genreId, genreName) => {
		deleteRequest(
			`${backendRoutes.genres}/${genreId}`,
			() => handleReqSuccess(`${genreName} deleted successfully`),
			handleReqError
		)
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

	//Get lists of genres
	const handleGetGenres = (isSubscribed, callback) => {
		if (isSubscribed)
			getGenreList(
				genres => {
					setGenres(genres)
				},
				callback,
				handleReqError
			)
	}

	function handleReqSuccess(message) {
		handleGetGenres(true, () => {
			mergeObj({
				success: true,
				message,
				open: true
			})
		})
	}

	useEffect(() => {
		let isSubscribed = true
		handleGetGenres(isSubscribed)
		return () => (isSubscribed = false)
	}, [])

	return (
		<div className={`container ${classes.wrapper}`}>
			<SectionHeaderLabel content="Genre List" />
			<form onSubmit={addGenre}>
				<div className="row pb-2 justify-content-center align-items-center">
					<div className="col-md-4">Add new Genre:</div>
					<div className="col-4">
						<TextField
							id="outlined-basic"
							label="Genre"
							variant="outlined"
							value={newGenreVal}
							onChange={e => setNewGenVal(e.target.value)}
						/>
					</div>
					<div className="col-2">
						<IconButton aria-label="Submit" type="submit" className={'m-0 p-0'}>
							<Icon
								type="submit"
								className="fa fa-plus-circle"
								style={{ color: green[500] }}
							/>
						</IconButton>
					</div>
				</div>
			</form>
			<div className={`row ${classes.tableBackground}`}>
				<div className="col-12 mx-0 px-4">
					<TableContainer component={Paper} className="mb-4">
						<Table className="col-12" size="small" aria-label="genre table">
							<TableHead>
								<TableRow>
									<TableCell align="left">Edit</TableCell>
									<TableCell align="center">Delete</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{genres &&
									genres.map(genre => {
										const { genre_name: genreName, genre_id: genreId } =
											genre || {}
										return (
											<TableRow key={genreId}>
												<TableCell align="center">
													<GenreEditField
														content={genreName}
														action={newName => handleEdit(genreId, newName)}
													/>
												</TableCell>
												<TableCell align="center">
													<IconButton
														aria-label="delete"
														className={'m-0 p-0'}
														onClick={() => handleDelete(genreId, genreName)}
													>
														<DeleteIcon
															className="m-0 p-0"
															style={{ color: orange[300] }}
														/>
													</IconButton>
												</TableCell>
											</TableRow>
										)
									})}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
			<Snackbar {...snackbarProps} handleClose={handleClose} />
		</div>
	)
}

Genres.propTypes = {}

export default Genres
