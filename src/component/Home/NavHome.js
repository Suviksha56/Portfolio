import { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { FaStudiovinari } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './home.css'
export class Home extends Component {
    render() {
        return (
            <div classNAme="ds">
                <ul className="nav p-2 fs-5  fixed-top gd">

                    <li className="nav-item ">

                        <Link className="nav-link active text-light fs-5 " aria-current="page" to="/">
                            <FaStudiovinari className='g1'></FaStudiovinari>
                            <b>S</b></Link>
                    </li>


                    <li className="nav-item ms-auto">
                        <Link className="nav-link text-light" to="/about">About</Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/resume">Resume</Link>
                    </li>

                   

                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/blog">Project</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/contact">Contact</Link>
                    </li>

                </ul>


            </div>
        );
    }

}