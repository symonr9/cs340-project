import React from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';

class Search extends React.Component {
   state= {
       title: ''
   }
   handleSubmit = () => {
        const title = this.state.title;
        this.props.handleSendRequest(title)
        this.setState({title: ''})
   }
   handleInputTitle = (event) => {
       event.preventDefault();
       const title = event.target.value;
       this.setState({title});
   }
   render() {
       const {title} = this.state;
       return (
           <div>
               <input type="text" onChange={this.handleInputTitle} value={title}/>
               <MDBBtn type="submit" onClick={this.handleSubmit}>Search</MDBBtn>
           </div>
       )
   }
}
export default Search;