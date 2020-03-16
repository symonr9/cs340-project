import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => (
	<div className="row">
		<div className="col-12 text-center">
			<Spinner animation="border" variant="info" />
		</div>
	</div>
)

export default Loader
