import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 relative overflow-hidden h-full w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent id={props.id} color={props.color} tag={props.tag} no={props.no} />
    </div>
  )
}

export default RightCard
 