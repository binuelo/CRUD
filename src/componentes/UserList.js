import React from 'react'

const UserList = ({use, setUserSelecter,removeUser}) => {
  return (
    <div>
          
            <div className='welcome'>
            <p><h1>{use.first_name} {use.last_name}</h1></p>
                      <p>{use.email}</p>
                      {/*<p>{use.password}</p>*/}
                      <p>{use.birthday}</p>
                    
            </div>
            <div className='year'>
                  <div className="select">
                  <button onClick={()=>setUserSelecter(use)}>Seleccionar</button> 
                </div>
                <div>
                  <button onClick={()=>removeUser(use.id)} className="delete" >Eliminar</button>
                </div>
                </div>
            
           
    </div>
  )
}

export default UserList