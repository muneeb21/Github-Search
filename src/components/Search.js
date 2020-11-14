import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import '../style.css';
import { addUser,addRepos } from '../actions';
class Search extends React.Component {

  searchHandler=(e)=>{
  e.preventDefault();
  // let user,repos;
  fetch("https://api.github.com/users/"+e.target.user.value)
  .then(res => res.json())
  .then(
    (result) => {
     
      
      this.props.store.subscribe(() => this.forceUpdate());
      this.props.store.dispatch(addUser(result));
    },
    (error) => {
      console.log(error);
    }
  );

  fetch("https://api.github.com/users/"+e.target.user.value+"/repos")
  .then(res => res.json())
  .then(
    (result) => {
     
      
      this.props.store.subscribe(() => this.forceUpdate());
      this.props.store.dispatch(addRepos(result));
    },
    (error) => {
      console.log(error);
    }
  );
  

  }
  
  render(){
    return (
      <div className="search">
         <form onSubmit={this.searchHandler}>
         <Input placeholder='Enter Username.....' name="user" className="input"/>
         <Button secondary type="submit">Search</Button>
         </form>
      </div>
    );
  }
}

export default Search;
