import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div>
       <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#about">About</a>
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default NavBar
