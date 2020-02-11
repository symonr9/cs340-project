import React from 'react';
import PropTypes from 'prop-types';

import './CRUDPage.scss';
import unirest from 'unirest';

import Movie from '../../molecules/Movie.jsx';
import Search from '../../molecules/Search.jsx';
import App from 'atomicDesign/logic/App/App.js';

import NavLink from 'atomicDesign/atoms/NavLink/NavLink';


class CreateListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest = (title) => {
    let current = this;
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?plot=short&r=json&s=" + encodeURIComponent(title.trim()), {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "bd133f25famsh0d6856dee426e57p14b362jsn6da558257de1"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(function (data) {
        const movieData = data;
        current.setState({ movies: movieData.Search });
      })
      .catch(err => {
        console.log(err);
      })
  };


  handleChange(event) {
    this.setState({ listName: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        List Name:<br />
        <input type="text" value={this.state.listName}/>
        <br/><br/>
        Genre Type:<br />
        <select value={this.state.genre} >
          <option value="1">Genre 1</option>
          <option value="2">Genre 2</option>
          <option value="3">Genre 3</option>
        </select>

        <div class="searchDiv">
          <Search handleSendRequest={this.sendRequest} /><br />
          <div class="searchMoviesDiv">
            {
              this.state.movies.map((movie) => {
                return <Movie {...movie} />
              })
            }
          </div>
        </div>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}




const CRUDPage = props => {
  return (
    <div>
      <br /><br />
      <CreateListForm />
    </div>
  )
}



CRUDPage.propTypes = {}

export default CRUDPage
