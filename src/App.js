import React from 'react'
import InputConainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';



const App = () => {
  return (
    <div>
      <h1>TODO LIST REDUX</h1>
      <hr />
      <InputConainer />
      <TodoContainer />
      
    </div>
  )
}

export default App
