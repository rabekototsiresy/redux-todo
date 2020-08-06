import { 
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
 } from './taskTypes';

const initialState =  {
  listTask:[]
}

let lastId = 0
export const taskReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_TODO: 
      return{
        ...state,
        listTask: [...state.listTask,{
          task: action.payload.task,
          id: ++lastId
        }]
      }
    case DELETE_TODO: 
      return {
        ...state,
        listTask: state.listTask.filter( task=>task.id !== action.payload)
      }
    case UPDATE_TODO: 
      return{
        ...state,
        listTask: state.listTask.map( task=>task.id == action.payload.id ?
        {
          task: action.payload.task,
          id: task.id
        } : task)
      }
    default: 
      return state;
  }
}

