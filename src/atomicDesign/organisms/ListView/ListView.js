import React from 'react'

import ListItem from 'atomicDesign/organisms/ListItem/ListItem.js';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdbreact'
import './ListView.scss'

const ListView = props => {
    return (
        <MDBContainer className=''>
            <MDBRow>
                {
                    props.movies.map((movie) => {
                        return <ListItem {...movie} />
                    })
                }
            </MDBRow>
        </MDBContainer>
    );
}

ListView.propTypes = {}

export default ListView
