import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './blog.css';
import { Home } from '../Home/NavHome';

import blg1 from '../Images/calculate.png';
import blg2 from  '../Images/blog1.jpeg';
import blg3 from '../Images/blog3.jpeg';
import blg4 from '../Images/blog4.jpeg';
import blg5 from  '../Images/blog5.jpeg';
import blg6 from '../Images/blog6.jpeg';
export function Myblog() {
    return (
        <div>
            <Home/>

            <div class="col-md-12 text-center text-white mt-5 fr" >
                <h4 class="mt-5 text-secondary">Check out my latest blog posts</h4>
                <h1 class="ab"><b>My Blog</b></h1>

                <br />
            </div>

            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark " >
                        <div>
                            <img src={blg1} height={"200px"} width={"361px"} />
                        </div>
                        <div class="card-body text-light" align="left">
                            <h3 class="card-title"><b>Calculator Project</b></h3>
                            
                            
                        </div>
                    </div>
                </div>


                
                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark  " >
                        <div class="">
                            <img src={blg2} height={"200px"} width={"361px"} />
                        </div>
                        <div class="card-body text-light" align="left">
                            <h5 class="card-title"><b>Take a tour of my office</b></h5>
                            <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>


                
                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark" >
                        <div>
                            <img src={blg3} height={"200px"} width={"361px"} />
                        </div>
                        <div class="card-body text-light" align="left">
                            <h5 class="card-title"><b>How i became a Web Designer</b></h5>
                            <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>

            </div>

        <br/><br/>

            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark" >
                        <div>
                            <img src={blg4} height={"200px"} width={"361px"} />
                        </div>
                        <div class="card-body text-light" align="left">
                            <h5 class="card-title">How to improve work performance</h5>
                            <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark" >
                        <div>
                            <img src={blg5} height={"200px"} width={"361px"} />
                        </div>
                        <div class="card-body text-light" align="left">
                            <h5 class="card-title"><b>How to work from home</b></h5>
                            <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>


                <div class="col-md-3 border-light" align="left">
                    <div class="card border-dark" >
                        <div>
                            <img src={blg6} height={"200px"} width={"361px"} />
                        </div>
                        <div class="card-body text-light" align="left">
                            <h5 class="card-title"><b>How to enjoy your business trip</b></h5>
                            <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                        </div>
                    </div>
                </div>

            </div>

            <br /><br /> <br /><br />


        </div>
    )
}