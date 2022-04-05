import axios from 'axios'
import React, { useState, useEffect } from 'react'

const UsersForm = ({getPerson,userSelecter,setUserSelecter}) => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[first,setFirst]=useState("")
    const[last,setLast]=useState("")
    const[birthday,setBirthday]=useState("")

    useEffect(()=>{
       if(userSelecter){//Si se preciona seleccionar
        console.log("Precione Seleccionar");
        setEmail(userSelecter.email)
        setPassword(userSelecter.password)
        setFirst(userSelecter.first_name)
        setLast(userSelecter.last_name)
        setBirthday(userSelecter.birthday)
    }
    },[userSelecter])
    //Funcion a ejecutar cuando puche agregar
    const submit = (e) => {
        e.preventDefault();
        
        console.log("ME Clikearon");
        const person={ //Datos a ingresar a la API
            email:email,
            password:password,
            first_name:first,
            last_name:last,
            birthday:birthday
        }
        if(userSelecter){
            
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelecter.id}/`,person)
        .then(()=>getPerson())
        setUserSelecter(null)
        reset()
        }else{
        console.log("Crea Nuevo Usuario");
        console.log(person);//Agregar USusarios
        axios
        .post("https://users-crud1.herokuapp.com/users/", person)
        .then(() => {
          getPerson();
          reset();
        })
        .catch((error) => console.log(error.response));
    }
    
    
    };

    const reset=() =>{
        setEmail("")
        setPassword("")
        setFirst("")
        setLast("")
        setBirthday("")
    }

  return (
    <form onSubmit={submit}> {/*llamamos a la funcion submit */ }
        <div className='container-input'>
            <label htmlFor="email">Email:</label>
            <input type="text"
            onChange={(e)=> setEmail(e.target.value)}
            value={email} />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
            <input type="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password} />
        </div>
        <div>
        <label htmlFor="first-name">Nombre:</label>
            <input type="text"
            onChange={(e)=> setFirst(e.target.value)}
            value={first} />
        </div>
        <div>
        <label htmlFor="last-name">Apellido:</label>
            <input type="text"
            onChange={(e)=> setLast(e.target.value)}
            value={last} />
        </div>
        <div>        <label htmlFor="birthday">Fecha:</label> 
            <input type="date"
            onChange={(e)=> setBirthday(e.target.value)}
            value={birthday} />
        </div>
            <button >Agregar</button>
    </form>
  )
}

export default UsersForm