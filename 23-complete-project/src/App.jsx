import React, { useEffect, useState, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import TaskList from './components/TaskList/TaskList'
import { data } from 'react-router-dom'

const App = () => {

  const [user,setUser] = useState(null)
  
  const [loggedInUserData, setloggedInUserData] = useState();

  const [userData,SetUserData] = useContext(AuthContext)
  // console.log(authData.employees);
  
  // useEffect(()=>{
  //     if(authData){
  //       const loggedInUser = localStorage.getItem("loggedInUser") 
  //       if(loggedInUser){
  //         setUser(loggedInUser.role)
  //       }
  //     }
  // },[authData])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }

  },[])

  const handleLogin = (email,password)=>{
    //  console.log(email,password);
    if(email == "admin@me.com" && password == "123"){
      // console.log("this is admin");
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      console.log(user);
    }

    else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)

      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
      }
      // console.log("this is user");
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
      console.log(user);
      
    }
    else{
      alert("invalid credentials")
    }
    
  }
  // const data = useContext(AuthContext)
  // console.log(data);
  // handleLogin('user@me.com',123);
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      {/* {user == 'admin' && <AdminDashboard />}
      {user == 'employee' && <EmployeeDashboard />} */}
      {/* <EmployeeDashboard /> */ }
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App