import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.user)
  return (
    <div id='right' className='rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 h-full w-2/3'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} no={elem.no} />
      })}
    </div>
  )
}

export default RightContent
