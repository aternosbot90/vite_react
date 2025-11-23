import React from 'react'
import {Bookmark} from 'lucide-react'
const card = (props) => {
    const {company, logo, posted, role, type, level, salary, location} = props
  return (
    <div className="card">
         <div>
          <div className="top">
           <div className="img">
            <img src={logo} alt="" />
           </div>
          <button>Save <Bookmark size={12} /></button>
         </div>
         <div className="center">
            <h3>{company} <span>{posted}</span></h3>
            <h2>{role}</h2>
            <div className='tag'>
              <h4>{type}</h4>
              <h4>{level}</h4>
            </div>
         </div>
         </div>
         <div className="bottom">
           <div>
              <h3>{salary}</h3>
              <p>{location}</p>
           </div>
             <button>Apply Now</button>
         </div>
       </div>
  )
}
export default card