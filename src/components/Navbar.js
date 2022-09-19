import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/business" className="nav-link">Business</Link>
                        </li>
                        <li className = "nav-item"><Link to="/entertainment" className = "nav-link">Entertainment</Link></li>
                        <li className = "nav-item"><Link to="/general" className = "nav-link">General</Link></li>
                        <li className = "nav-item"><Link to="/health" className = "nav-link">Health</Link></li>
                        <li className = "nav-item"><Link to="/science" className = "nav-link">Science</Link></li>
                        <li className = "nav-item"><Link to="/sports" className = "nav-link">Sports</Link></li>
                        <li className = "nav-item"><Link to="/technology" className = "nav-link">Technology</Link></li>
                        
                    </ul>
                    
                </div>
            </div>


        </nav>
      </div>
    )
  }
}
