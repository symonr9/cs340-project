import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import { routes } from 'siteData/routes'
import { backendRoutes } from 'siteData/routes'
import { getData } from 'services/apiCalls'
import {
	MDBCarousel,
	MDBCarouselCaption,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	MDBContainer,
	MDBCol,
	MDBRow,
} from 'mdbreact'
import Card from 'atomicDesign/molecules/Card/Card'
import './ListDetails.scss'

const ListDetails = ({ match }) => {
	const [listData, setList] = useState(null)
	let { listId } = match.params || {}
	listId = parseInt(listId)
	const validParam = listId && typeof listId === 'number'

	const getListDetails = () => {
		if (validParam)
			getData(`${backendRoutes.listDetails}/${listId}`, response => {
				setList(response)
			})
	}
	useEffect(getListDetails, [])

	const {
		name: listName,
		date_published: publishDate,
		number_of_likes: numOfLikes,
		number_of_dislikes: numOfDislikes,
		owner_name: owner,
		listItems,
	} = listData || {}

	//If no list param or is invalid, redirect to root
	if (!validParam) return <Redirect to={routes.root} />
	if (!listData) return null
	return (
		<div className="o__list-details">
			<MDBContainer className="o__list-details__container">
				<MDBRow>
					<MDBCol md="8" className={'text-center'}>
						<h1 className="mt-3 h1-responsive">{listName}</h1>
						<h2 className="h2-responsive">{`by ${owner}`}</h2>
					</MDBCol>
					<MDBCol md="4" className={'mt-4 text-center'}>
						<h3 className="mb-3 h3-responsive">{`published`}</h3>
						<h3 className="mb-3 h3-responsive">{`${moment(publishDate).format(
							'M-DD-YYYY',
						)}`}</h3>
					</MDBCol>
				</MDBRow>
				<MDBCarousel
					activeItem={1}
					length={(listItems && listItems.length) || 1}
					showControls={true}
					showIndicators={true}
					className="z-depth-1 mw-100"
				>
					<MDBCarouselInner className="w-100">
						{listItems &&
							listItems.map((item, idx) => {
								const {
									list_item_id: listItemId,
									name: itemName,
									image_link,
								} = item
								return (
									<MDBCarouselItem itemId={idx + 1} key={listItemId}>
										<MDBView>
											<img
												className="d-block w-100"
												src={image_link}
												alt={itemName}
											/>
											<MDBMask overlay="black-light" />
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">{itemName}</h3>
										</MDBCarouselCaption>
									</MDBCarouselItem>
								)
							})}
					</MDBCarouselInner>
				</MDBCarousel>
				<MDBRow className="my-2 o__list-details__card-holder">
					{listItems &&
						listItems.map(item => {
							return <Card {...item} key={item.list_item_id} />
						})}
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

ListDetails.propTypes = {
	match: PropTypes.object,
}

export default ListDetails
