import React from 'react'
import { Link } from 'react-router-dom'

const Fis = () => {
  return (
    <div>
        <Link to='/' id="nas"> Home </Link>
        <Link to='/nav2' id="nas"><b>Orderings</b> </Link>
        <Link to='/your' id="nas"> <b>YOUR RESTATURNT  </b></Link>
       <Link to='/delivery'id="nas"> <b>DELIVERY </b></Link>
        <br></br>
         <br></br> <br></br>
        <h4>
              <Link to='/nav2' id="nas">Move to next </Link>
              
        </h4>
         <br></br>
    </div>
  )
}

export default Fis
