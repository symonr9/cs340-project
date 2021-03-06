import React from 'react'
import SectionTitle from 'atomicDesign/atoms/SectionTitle/SectionTitle'
import Movie from 'atomicDesign/molecules/Movie/Movie.js'
import Search from 'atomicDesign/molecules/Search/Search.js'
import ListView from 'atomicDesign/organisms/ListView/ListView.js'
import ActionButton from 'atomicDesign/atoms/ActionButton/ActionButton'
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem
} from 'mdbreact'
import './ListForm.scss'

const ListForm = props => {
	return (
		<MDBContainer className="">
			<MDBRow>
				<MDBCol md="8" className="">
					<form>
						<MDBRow>
							<SectionTitle title={'Create a new list'} />
							<MDBInput label="List Name" size="lg" />
							<MDBCol md="6" className="">
								<MDBDropdown>
									<MDBDropdownToggle caret color="tertiary">
										{props.genre}
									</MDBDropdownToggle>
									<MDBDropdownMenu>
										<MDBDropdownItem>Genre 1</MDBDropdownItem>
										<MDBDropdownItem>Genre 2</MDBDropdownItem>
										<MDBDropdownItem>Genre 3</MDBDropdownItem>
										<MDBDropdownItem>Genre 4</MDBDropdownItem>
										<MDBDropdownItem>Genre 5</MDBDropdownItem>
									</MDBDropdownMenu>
								</MDBDropdown>
							</MDBCol>
							<MDBCol md="4" className="">
								<Search handleSendRequest={props.sendRequest} />
								<br />
							</MDBCol>
							<div className="searchMoviesDiv">
								{props.movies.map(movie => {
									return <Movie {...movie} />
								})}
							</div>
							<MDBCol md="2" className=""></MDBCol>
						</MDBRow>
						<ActionButton content={'Submit'} action={props.submitList} />
						<br />
						<br />
					</form>
				</MDBCol>
				<MDBCol md="4" className="">
					<ListView movies={props.movies} />
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}

ListForm.propTypes = {}

export default ListForm
