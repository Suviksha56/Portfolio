import { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { FaStudiovinari } from 'react-icons/fa';
import './home.css'
export class Home extends Component {
    render() {
        return (
            <div class="ds">
                <ul class="nav p-2 fs-5  fixed-top gd">

                    <li class="nav-item ">

                        <a class="nav-link active text-light fs-5 " aria-current="page" href="Portfolio/">
                            <FaStudiovinari className='g1'></FaStudiovinari>
                            <b>S</b></a>
                    </li>


                    <li class="nav-item ms-auto">
                        <a class="nav-link text-light" href="/about">About</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link text-light" href="/resume">Resume</a>
                    </li>

                   

                    <li class="nav-item">
                        <a class="nav-link text-light" href="/blog">Blog</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-light" href="/contact">Contact</a>
                    </li>

                </ul>


            </div>
        );
    }

}