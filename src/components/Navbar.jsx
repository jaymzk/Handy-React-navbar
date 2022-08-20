import React, {useState} from "react"
import {Link} from "react-router-dom"

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const [searchString, setSearchString] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Form sumbitted, search string=${searchString}`)
  }

  const onChange = (e) => {
    setSearchString(e.target.value)
  }

  return (
    <div className="navbar">
    
      <div className="leftSide">
         
      <nav id={showLinks ? "hidden" : ""}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
       
      </nav>
            <div id="menuIcon" onClick={()=>setShowLinks(!showLinks)}>

            {!showLinks ?
            <img src="../../src/assets/icons/menu.PNG" />
            :
            <img src="../../src/assets/icons/closeMenu.PNG" />
            }
              
            
            </div>
          
      </div>
      <div className="rightSide">
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="Search"
          onChange={onChange}
          />
        <button>Search</button>
      </form>
      </div>
    </div>
  )
}

export default Navbar