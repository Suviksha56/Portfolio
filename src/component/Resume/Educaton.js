import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './resume.css';
import { Home } from '../Home/NavHome';

export function Education() {
    return (
        <div>
            <Home/>

            <div class="col-md-12 text-center text-white mt-5 fr" >
                <h6 class="mt-5 text-secondary">Check out my Resume</h6>
                <h1 class="abw"><b>Resume</b></h1>
                <br />
            </div>
            <br /><br />




            <div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <h3 class="text-light mt-2 mb-2" align="left"><b>Education</b></h3>
                        <div class="bor">
                            <div class="htr">
                                <div class="card-header" align="left">
                                    <div class="card-body">             
                                        <h5 class="card-text text-light mt-2 gr" ><b>Secondary Education</b></h5>
                                        <p class="card-text text-secondary gr">State Board / 2015 - 2017</p>
                                        <p class="card-text text-secondary gr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                                        <hr class="text-secondary" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="card-header" align="left">
                                    <div class="card-body">
                                        <h5 class="card-text text-light mt-2 gr"><b>Computer Science</b></h5>
                                        <p class="card-text text-secondary gr">Cambridge University / 2017 - 2019</p>
                                        <p class="card-text text-secondary gr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                                        <hr class="text-secondary" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="card-header" align="left">
                                    <div class="card-body">
                                        <h5 class="card-text text-light mt-2 gr"><b>Bachelor Degree</b></h5>
                                        <p class="card-text text-secondary gr">Mangalore University / 2017 - 2019</p>
                                        <p class="card-text text-secondary gr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    )
}