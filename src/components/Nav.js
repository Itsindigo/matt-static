import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import Profile from './Profile';


export default () => (
  <Fragment>
    <nav>
      <div className='nav-content'>
        <Profile />
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/" href="/">Home</Link>
            </li>
            <li>
              <Link to="/" href="/">Home</Link>
            </li>
            <li>
              <Link to="/" href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </Fragment>
)

