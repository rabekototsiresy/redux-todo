#make api Redu

import React from 'react'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import axios from 'axios'


// STATE
const initialState = {
  loading: false,
  users: [],
  error: ''
}

// ACTION
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// ACITION CREATOR

const fetchUsersRequest = ()=>{
  return{
    type: FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = users =>{
  return{
    type: FETCH_USERS_SUCCESS,
    loading: false,
    payload: users
  }
}

const fetchUsersFailure = error =>{
  return{
    type: FETCH_USERS_FAILURE,
    payload: error

  }
}


const reducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_USERS_REQUEST: 
      return{
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS: 
      return{
        ...state,
        loading: false,
        users: action.payload
      }
    case FETCH_USERS_FAILURE: 
      return{
        ...state,
        loading: false,
        users: action.payload
      }
  }

}



const fetchUsers = ()=>{
  return (dispatch)=>{
    dispatch(fetchUsersRequest())
    axios.get('url')
         .then( response =>{
            let users = response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
         })
         .catch( error=>{
            dispatch(error.message)
         })
  }
}
const store = createStore(reducer,applyMiddleware(thunk.default))
store.subscribe( ()=>{
  console.log(store.getState())
})

store.dispatch(fetchUsers())
















const App = () => {
  return (
    <div>
      <h1>OK</h1>
    </div>
  )
}

export default App
