import React from 'react';
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
               <input type="submit" onClick={this.handleSubmit} value="Search"/>
           </div>
       )
   }
}
export default Search;