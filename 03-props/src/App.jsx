import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div>
    <div className="parent">
      <Card user='Devanand' age={18} img='https://images.unsplash.com/photo-1763415364257-89280d0296c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Dev' age={28} img='https://plus.unsplash.com/premium_photo-1691095182210-a1b3c46a31d6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='vanand' age={19} img='https://images.unsplash.com/photo-1763321402439-41eb2a0c7e7b?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      {/* props are just keyword */}
    </div>
    </div>
  )
}
 
export default App