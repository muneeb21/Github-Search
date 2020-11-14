import React from 'react';
import '../style.css';
import Navbar from './Navbar';
import Search from './Search';
import GithubCard from './GithubCard';
import RepoItem from './RepoItem';

import { addUser, addRepos } from '../actions';

class  App extends React.Component {
  

  componentDidMount=()=>{
    console.log("component did mount");
    
    fetch("https://api.github.com/users/example")
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

    fetch("https://api.github.com/users/example/repos")
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
    
    console.log("Heres the state",this.props.store.getState());
    const {user,repos}=this.props.store.getState();
    
    return (
      <div className="App">
         <div>
         <Navbar/>
         </div>
         <div>
         <Search store={this.props.store}/>
         </div>
         
         <div className="card-container">
         <GithubCard user={user}/>
         </div>
               
         <div className="repo-heading">
         
           <h2>Repositories</h2>
         </div>
         <div className="repolist-container">
           
         
         {repos.map((repo) => (
              <div className="repo-item">
                <RepoItem 
                repo={repo}/>
               
              </div>
              
                
              
            ))}
         
             
         </div>
        
      
      </div>
    );
  }
}

export default App;
