import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaWordpressSimple } from 'react-icons/fa';

import './about.css';
export function Services() {
    return (
        <div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3 text-light f1" align="left">
                    <h4 class="text-secondary">Services i offer to my clients</h4>
                    <h1 class="ab2  pb-3"><b>My Services</b></h1>
                </div>
            </div>
            <br /><br />
            <div class="row">
                <div class="col-md-2"></div>


                <div class="col-md-3" align="left">
                    <div class="card border-dark h11 s1" >
                        <div>
                            <FaHtml5 class="text-success tr p-2"></FaHtml5>
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title">HTML</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 " align="left">
                    <div class="card border-dark s1" >
                        <div>
                            <FaCss3Alt class="text-success tr  p-2"></FaCss3Alt>
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title">CSS</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>


                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark s1" >
                        <div>
                            <FaBootstrap class="text-success tr mt-2 p-2"></FaBootstrap>
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title">Bootstrap</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </div>

            <br /><br />

            <div class="row">
                <div class="col-md-2"></div>


                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark s1" >
                        <div>
                            <FaJsSquare class="text-success tr mt-2 p-2"></FaJsSquare>
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title">Javascript</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark s1" >
                        <div>
                            <FaCode class="text-success tr mt-2 p-2"></FaCode>
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title">MERN Full stack</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>


                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark s1" >
                        <div>
                            <FaWordpressSimple class="text-success tr mt-2 p-2"></FaWordpressSimple>
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title">Web Development</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}