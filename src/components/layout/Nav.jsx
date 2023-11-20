import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className="navbar bg-base-100 opacity-70 pl-20 pr-20">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">RH</a>
        </div>
        <div className="flex-none  opacity-1">
            <ul className="menu menu-horizontal px-1 font-bold text-lg">
              <li><Link to={'/'}><a>Cards</a></Link></li>
              <li><Link to={'/table'}><a>Table</a></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav