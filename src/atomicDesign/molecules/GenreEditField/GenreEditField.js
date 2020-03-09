import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import SendIcon from '@material-ui/icons/Send'
import { useBool, useInputText } from 'services/hooks'
import { green } from '@material-ui/core/colors'

export default function GenreEditField({ content, action }) {
	const { val: editState, toggleVal: toggleEditView } = useBool(false)
	const { val: editInputVal, setVal: setEditInputVal } = useInputText(content)

	return (
		<div className={`row align-items-center`} noValidate autoComplete="off">
			<div className="col-2">
				<IconButton aria-label="edit" onClick={toggleEditView}>
					<EditIcon className="" color="primary" />
				</IconButton>
			</div>
			<div className="col-10 align-center">
				{!editState && <span>{content}</span>}
				{editState && (
					<form
						onSubmit={event => {
							event.preventDefault()
							if (action) {
								action(editInputVal)
								toggleEditView()
							}
						}}
					>
						<TextField
							label="Update genre name"
							value={editInputVal}
							onChange={setEditInputVal}
						/>
						<IconButton type="submit" aria-label="send">
							<SendIcon style={{ color: green[400] }} />
						</IconButton>
					</form>
				)}
			</div>
		</div>
	)
}

GenreEditField.propTypes = {
	content: PropTypes.string,
	action: PropTypes.func
}

GenreEditField.defaultProps = {
	content: '',
	action: () => null
}
