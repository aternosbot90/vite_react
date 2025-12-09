import React from 'react'

const App = () => {
  
  // localStorage.setItem('user','kunal')

  // const user = localStorage.getItem('user')

  const user = {
    name: 'ravi',
    age: 25
  }

  localStorage.setItem('user', JSON.stringify(user));

  const parseuser = JSON.parse(localStorage.getItem('user'))

  return (
    <div>{parseuser.name}</div>
  )
}

export default App