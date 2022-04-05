import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './componentes/UserList';
import UsersForm from './componentes/UsersForm';
function App() {
   //Estado Principal
   const [user, setUser]=useState([]) //Se pone un arreglo vacio por que es lo que recibo
  const[userSelecter,setUserSelecter]=useState(null) //null en caso de que no exista seleccion, creo un estado para pasar informarcion UserForm
   useEffect(()=>{
      axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then( res => setUser(res.data));
      console.log(user);

   },[])
   const getPerson=()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then( res => setUser(res.data));
   }

   const removeUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=> getPerson())
    setUser(user.filter((use) => use.id !== id));
 
  };
   const selectuser=usser=> setUserSelecter(usser); //Funcion Seleccionar
  return (
   
    <div className="App">
          <UsersForm 
          getPerson={getPerson}
          userSelecter={userSelecter}//enviamos la seleccion de USerList
          setUserSelecter={setUserSelecter}
          />
          <div className='card'>
        { 
         user.map(use=> ( 
          <UserList use={use} setUserSelecter={setUserSelecter} 
          removeUser={removeUser}
          />
         ))
        }
         </div>

    </div>
  );
}

export default App;
