import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux'

const InputConainer = (props) => {
  const {listTask,addTodo} = props;
  const [todo, setTodo] = useState('')
  return (
    <div>
      <input 
      type="text" 
      value={todo} 
      placeholder="what are you want to do ? " 
      onChange={ (e)=>setTodo(e.target.value)}
      />
      <button id="bAdd" onClick={()=>{addTodo(todo); setTodo('')}}>ADD</button>
    </div>
  )
}

const mapStateToProps = state=>{
  return{
    listTask: state.listTask
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    addTodo: (todo)=>dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputConainer)
