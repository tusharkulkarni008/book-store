import React from 'react'

const navbar = () => {
  return (
    <nav className='nav'>
        <a href="/" className='site-title'>sitename</a>
        <ul>
            <li>
                <a href="/signup"></a>
                
            </li>
            <li>
            <a href="/login"></a>
            </li>
        </ul>

    </nav>
  )
}

export default navbar
