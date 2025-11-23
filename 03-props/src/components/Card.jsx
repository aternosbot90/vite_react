import React from 'react'

const Card = (props) => {
    const {user, age, img} = props
  return (
    <div className="card">
            <img src={img} alt="" />
            <h1>{user}</h1>
            <h2>{"Age: " + age}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, molestiae!</p>
            <button>view profile</button>
          </div>
  )
}

export default Card