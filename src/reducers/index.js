import {
    ADD_USER,
    ADD_REPOS
   
  } from '../actions';

  const initialMoviesState = {
    user: {},
    repos:[]
  };

  export default function user(state = initialMoviesState, action) {
    console.log("action****",action);
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          user: action.user,
         
        }; 
        case ADD_REPOS:
          return {
            ...state,
            repos:action.repos
          }; 

      default:
        return state;
    }
  }