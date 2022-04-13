import React from 'react'
import Todostuff from './Todostuff'
const Todolist = (props) => {
  let newstyle={
    minHeight:"55vh",
  }
  return (
    <div className='container my-3' style={newstyle}>
          <h3 className=' my-3'>Todos List</h3>
       {/*Todolist*/}
       {props.todoslist.length===0?"No todos to display":
       props.todoslist.map((todo)=> {
            
         return <Todostuff todo={todo} key={todo.sno} ondelete={props.ondelete}/>
       
       })}
      
    </div>
  )
}

export default Todolist
