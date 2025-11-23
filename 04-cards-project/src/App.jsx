import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card.jsx'

const App = () => {
      const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bengaluru, India"
  },
  {
    id: 3,
    company: "Meta",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    posted: "1 week ago",
    role: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4, 
    company: "Apple",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
    posted: "3 days ago",
    role: "iOS Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Remote"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    posted: "6 days ago",
    role: "Backend Engineer",
    type: "Contract",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Delhi, India"
  },
  {
    id: 6,
    company: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    posted: "4 days ago",
    role: "Cloud Architect",
    type: "Full Time",
    level: "Senior Level",
    salary: "$150/hr",
    location: "Noida, India"
  },
  {
    id: 7,
    company: "Tesla",
    logo: "https://cdn-icons-png.flaticon.com/512/154/154870.png",
    posted: "1 day ago",
    role: "AI Research Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$180/hr",
    location: "Palo Alto, USA"
  },
  {
    id: 8,
    company: "OpenAI",
    logo: "https://cdn-icons-png.flaticon.com/512/11817/11817167.png",
    posted: "2 weeks ago",
    role: "Machine Learning Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$200/hr",
    location: "San Francisco, USA"
  },
  {
    id: 9,
    company: "Adobe",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888874.png",
    posted: "3 days ago",
    role: "Creative Cloud Product Manager",
    type: "Full Time",
    level: "Mid Level",
    salary: "$125/hr",
    location: "Remote"
  },
  {
    id: 10,
    company: "IBM",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    posted: "1 week ago",
    role: "Data Scientist",
    type: "Part Time",
    level: "Senior Level",
    salary: "$100/hr",
    location: "Chennai, India"
  }
];
  console.log(jobs)
  return (
    <div className="parent">
      {jobs.map(function(elems){
        return <Card company={elems.company} logo={elems.logo} posted={elems.posted} role={elems.role} type={elems.type} level={elems.level} salary={elems.salary} location={elems.location} />
      })}
    </div>
  )
}

export default App