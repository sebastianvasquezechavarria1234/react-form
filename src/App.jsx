import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/table';

function App() {
  const [users, setUsers] = useState([]);
  const [errorDocumento, setErrorDocumento] = useState("")
  const[errorNombre, setErrorNombre] = useState("")


  const registerData = (user) => {

    const repetirDocumento = users.some((d) =>d.documento===user.documento)

    const repetirNombre = users.some((n) =>n.nombre ===user.nombre)

    if(!repetirDocumento){
      setUsers([...users, user]);
    }else{
      setErrorDocumento("Este documento ya esta registrado")
    }
    if(!repetirNombre){
      setUsers([...users, user]);
    }else{
      setErrorNombre("Este nombre ya esta registrado")
    }


  };

  return (
    <section className='py-[120px] max-w-[1500px] mx-auto px-[20px] flex gap-[40px]'>
      <Form registerData={registerData} users={users} errorDocumento={errorDocumento} setErrorDocumento={setErrorDocumento} errorNombre={errorNombre} setErrorNombre={setErrorNombre}/>
      <Table users={users} />
    </section>
  );
}

export default App;

