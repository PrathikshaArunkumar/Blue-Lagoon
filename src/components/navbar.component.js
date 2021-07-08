import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/hotel" className="navbar-brand">Blue Lagoon Resort</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                            <Link to="/create" className="nav-link">Book room</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Room Status</Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        );
    }
}