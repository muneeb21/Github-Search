export const ADD_USER = 'ADD_USER';
export const ADD_REPOS = 'ADD_REPOS';


// action creators
export function addUser(details) {
    return {
      type: ADD_USER,
      user:details,
    };
  }

  export function addRepos(details) {
    return {
      type: ADD_REPOS,
      repos:details
    };
  }