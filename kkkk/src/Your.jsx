import React from 'react'
import You1 from './You1'
import You2 from './You2'
import You3 from './You3'
import { Link } from 'react-router-dom'


const Your = () => {
  return (
    <div>
<br></br>
    <You1 />
    <You2 />
    <You3 />
    <br></br>
<Link to='/m' id="nas"><b>Orderings</b> </Link> 
{/* l; */}
 <Link to='/delivery'id="nas"> <b>DELIVERY </b></Link>
<br></br>
      <br></br>
    </div>
  )
}

export default Your
