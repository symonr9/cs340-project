import React from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import './Movie.scss';

class Movie extends React.Component {
    constructor(props) {
        super(props);
      //  const {Title, Poster, Year} = this.props;
      }

    render() {
      const {Title, Poster, Year, addToList} = this.props;
       return (
           <div className="movie">
               <div className="titleYear">
                   <h1 className="title">{Title}</h1>
                   <h2 className="year">{Year}</h2>
               </div>
               <div >
                   <img className="poster"src={Poster} alt="my movie poster"/>
               </div>
               <MDBBtn className="addToListBtn" onClick={addToList(Title)}>Add to List</MDBBtn>
           </div>
       )
   }
}
export default Movie;