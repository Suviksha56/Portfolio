import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import { Home } from '../Home/NavHome';

import { FaBullseye } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
export function Contact() {
    return (
        <div>
            <Home/>
            <div class="col-md-12 text-center text-white mt-5 " >
                <h6 class="mt-5 text-secondary">Feel free to contact me anytimes</h6>
                <h1 class="abe"><b>Get in Touch</b></h1>
                <br />
            </div>
            <br /><br />

            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-5" align="left">
                    <h3 class="text-light">Message</h3>
                    <br />
                    <input type="text" placeholder="Name" class="frr text-light p-3" />
                    <input type="text" placeholder="Email" class="ms-5  text-light frr p-3" />
                    <br /><br />

                    <input type="text" placeholder="Subject" class="text-light sub p-3" />
                    <br /><br />
                    <textarea class="text-light mes p-3" placeholder="Message"></textarea>
                    <br /><br />
                    <button class="btn btn-lg bg-success text-light border-success rounded-5">Send Message</button>
                </div>
                

                <div class="col-md-5" align="left">
                    <h3 class="text-light">Contact Info</h3>
                    <p class="text-secondary fs-5 mb-4">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                    <div class="row mb-2">
                        <div class="col-md-2">
                            <FaBullseye class="text-success fsa"></FaBullseye>
                        </div>
                        <div class="col-md-3">
                            <h5 class="text-light fs-5"><b>Name</b></h5>
                            <h5 class="text-secondary fs-5">Suviksha</h5>
                        </div>
                    </div>
                    <hr class="text-secondary" />
                    <div class="row mb-2">
                        <div class="col-md-2 ">
                            <FaLocationArrow class="text-success fsa"></FaLocationArrow>
                        </div>
                        <div class="col-md-5">
                            <h5 class="text-light fs-5"><b>Location</b></h5>
                            <h5 class="text-secondary fs-5">Bangalore, India</h5>
                        </div>
                    </div>
                    <hr class="text-secondary" />
                    <div class="row mb-2">
                        <div class="col-md-2">
                            <FaPhoneAlt class="text-success fsa"></FaPhoneAlt>
                        </div>
                        <div class="col-md-3">
                            <h5 class="text-light fs-5"><b>Call Me</b></h5>
                            <h5 class="text-secondary fs-5">9999999999</h5>
                        </div>
                    </div>
                    <hr class="text-secondary" />
                    <div class="row mb-2">
                        <div class="col-md-2">
                            <FaEnvelope class="text-success fsa"></FaEnvelope>
                        </div>
                        <div class="col-md-5">
                            <h5 class="text-light fs-5"><b>Email Me</b></h5>
                            <h5 class="text-secondary fs-5">Suviksha84@gmail.com</h5>
                        </div>
                    </div>


                </div>

            </div>

            <br/><br/><br/><br/>




        </div>
    )

}