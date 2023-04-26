import React from 'react'
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className='hide-navbar'>
      <h1>
        Page does not exist!
      </h1>
      <a href='/'>
Home
      </a>
    </div>
  )
}

export default PageNotFound
