import React from 'react'

const  Todostuff= ({todo, ondelete}) => {
  return (
    <div>
             <h4>{todo.title}</h4>
             <h4>{todo.desc }</h4>
            <button className="btn btn-sm btn-danger" onClick={()=>{
                ondelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todostuff
