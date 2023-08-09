import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaEgg } from 'react-icons/fa';
import './about.css';
export function Plan() {
    return (
        <div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3 text-light f1" align="left">
                    <h4 class="text-secondary pt-5">Get started with my services</h4>
                    <h1 class="ab2  pb-3"><b>Choose a Plan</b></h1>
                </div>
            </div>

            <div class="row">
                <div class="col-md-2"></div>


                <div class="col-md-3" >
                    <div class="card border-dark h11 " >
                        <div>
                            <FaEgg class="text-success tr p-2 mt-5"></FaEgg>
                        </div>
                        <div class="card-body text-light" >
                            <h3 class="card-title">Standard</h3>
                            <h4 class="card-text">$19/month</h4>
                            <p class="card-text text-secondary">Mobile App Design</p>
                            <p class="card-text text-secondary">Responsive Design</p>
                            <p class="card-text text-secondary">Database Development</p>
                            <p class="card-text text-secondary">Web Design</p>
                            <p class="card-text text-secondary">24/7 Support</p>
                            <button class="btn btn-lg bg-success btn-light text-light border-success rounded-5">Get Standard</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3" >
                    <div class="card border-dark h11 " >
                        <div>
                            <FaEgg class="text-success tr p-2 mt-5"></FaEgg>
                        </div>
                        <div class="card-body text-light" >
                            <h3 class="card-title">Professional</h3>
                            <h4 class="card-text">$29/month</h4>
                            <p class="card-text text-secondary">Mobile App Design</p>
                            <p class="card-text text-secondary">Responsive Design</p>
                            <p class="card-text text-secondary">Database Development</p>
                            <p class="card-text text-secondary">Web Design</p>
                            <p class="card-text text-secondary">24/7 Support</p>
                            <button class="btn btn-lg bg-success btn-light text-light border-success rounded-5">Get Pro</button>
                        </div>
                    </div>
                </div>


                <div class="col-md-3" >
                    <div class="card border-dark h11 " >
                        <div>
                            <FaEgg class="text-success tr p-2 mt-5"></FaEgg>
                        </div>
                        <div class="card-body text-light" >
                            <h3 class="card-title">Business</h3>
                            <h4 class="card-text">$39/month</h4>
                            <p class="card-text text-secondary">Mobile App Design</p>
                            <p class="card-text text-secondary">Responsive Design</p>
                            <p class="card-text text-secondary">Database Development</p>
                            <p class="card-text text-secondary">Web Design</p>
                            <p class="card-text text-secondary">24/7 Support</p>
                            <button class="btn btn-lg bg-success btn-light text-light border-success rounded-5">Get Business</button>
                        </div>
                    </div>
                </div>


            </div>
            <br/><br/><br/><br/>
        </div>
    );
}