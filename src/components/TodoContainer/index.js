import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deleteTodo,updateTodo } from '../../redux';

const TodoContainer = () => {
  const listTask = useSelector( state=>state.listTask)
  const dispatch = useDispatch()
  const [taskUpdate, setTaskUpdate] = useState('')

  const [update, setUpdate] = useState('')
  const showInputUpdate  = (id,taskToUpdate)=>{
    setUpdate(id)
    setTaskUpdate(taskToUpdate)
  }
 
  const hanldeUpdate = (id)=>{
    dispatch(updateTodo(taskUpdate,id))
    setUpdate('')
    setTaskUpdate('')
  }
 
  
  const displayTask = listTask.map(task=>(
    <tr key={task.id}>
      <td>{task.id}</td>
      {
        update == task.id
        ?
        (
          <td>
            <input 
            type='text' 
            value={taskUpdate}  
            onChange={(e)=>setTaskUpdate(e.target.value)}
            />
          </td>
        )
        :
        (
          <td>{task.task}</td>
        )
      }
      <td>
      {
        update == task.id
        ? 
        (<button onClick={()=>{hanldeUpdate(task.id)}}>
          Save
        </button>)
        :
        (
        <button onClick={()=>showInputUpdate(task.id,task.task)}>
          Update
        </button>
        )
      }
      </td>
      <td>
        <button onClick={()=>dispatch(deleteTodo(task.id))}>
          Delete
        </button>
      </td>
    </tr>
  ))
  return (
    <div>
      <hr />
      <h3>
        <u>List Task</u>
      </h3>
      <div id='mainTable'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {displayTask}
          </tbody>
        </table>
        
      
      </div>
    </div>
  )
}

export default TodoContainer
