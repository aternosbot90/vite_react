import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams()
    console.log(params.id);

  return (
    <div>
        <h1 style={{fontSize: "80px"}}>{params.id} Course Details</h1>
    </div>
  )
}

export default CourseDetails