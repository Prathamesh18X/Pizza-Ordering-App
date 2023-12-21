import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
          <a className="navbar-brand" href="#">La pino'z</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-left">
              <li className="nav-item">
                Login 
              </li>
              <li className="nav-item">
                Cart = 0
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
