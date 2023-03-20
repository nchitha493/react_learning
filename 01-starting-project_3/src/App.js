import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import ErrorModal from './components/UI/ErrorModal/ErrorModule';

function App() {
  const[users,setUser]=useState([])
  const[showError,setShowError]=useState(false)
  const [errorMsg,setErrorMsg] = useState()
  // const userDiv = users.map((user)=>{
  //   return 
  // })
  const userDetails = (user)=>{
    setUser((prevValue)=>{
      return [...prevValue,user]
    })
  }
  const deleteUser = (id)=>{
    setUser((prevValue)=>{
      return prevValue.filter((user)=>user.id!==id)
    })
  }

  const closeModal =()=>{
    setErrorMsg(null)
  }
  const sendErrorModal=(error)=>{
    //setShowError(true)
    setErrorMsg(error)
    console.log(error)
  }
  
  return (
    <div>
      {errorMsg && <ErrorModal closeModal={closeModal}  errorMsg={errorMsg} />}
      <AddUser userDetails={userDetails} sendError= {sendErrorModal} />
      {<UserList item={users} deleteUser={deleteUser}></UserList>}
    </div>
  );
}

export default App;
