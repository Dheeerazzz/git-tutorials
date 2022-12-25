import './App.css';
import Form from './components/form';
import List from './components/list';
import { useState } from 'react';

function App() {
  const [userslist,setuserslist]= useState([]);

 const adduserhandler=(name)=>{
  setuserslist((prevuserslist)=>{
    return[...prevuserslist,{name:name ,id:Math.random().toString()}];
  })
 }
  return (
    <>
 <div className="app" > Bucket list </div>
 <Form onadduser={adduserhandler}></Form>
 <List users={userslist}/>
 </>
  );
}

export default App;
