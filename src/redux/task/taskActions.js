import { 
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
 } from './taskTypes';

export const addTodo = task =>{
  return{
    type: ADD_TODO,
    payload: {
      task: task,
      id: 1
    }
  }
}

export const deleteTodo = id=>{
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const updateTodo = (newTask,id) =>{
  return{
    type: UPDATE_TODO,
    payload: {
      task: newTask,
      id: id
    }
  }
}