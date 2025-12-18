import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
    // console.log(props.children[0]);
    
//    const data = useContext(ThemeDataContext)
//          console.log(data);
         const [theme, setTheme] = useContext(ThemeDataContext)
   return (
    <div className={theme}>
       <h2>Dice</h2>
       {/* {props.children[1]}
       {props.children[0]} */}
       <Nav2 />
    </div>
  )
}

export default Navbar