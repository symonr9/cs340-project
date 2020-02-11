import React from 'react';
import './Movie.scss';

class Movie extends React.Component {

    render() {
       const {Title, Poster, Year} = this.props;
       return (
           <div className="movie">
               <div className="titleYear">
                   <h1 className="title">{Title}</h1>
                   <h2 className="year">{Year}</h2>
               </div>
               <div >
                   <img className="poster"src={Poster} alt="my movie poster"/>
               </div>
               <button className="addToListBtn">Add to List</button>
           </div>
       )
   }
}
export default Movie;