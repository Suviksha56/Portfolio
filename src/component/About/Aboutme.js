import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pho from '../Images/photo.jpg'
import { Home } from '../Home/NavHome';


import './about.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import blgg from  '../Images/SuvikshaM.pdf';

export function Aboutme() {
    return (
        <div>
           <Home/>
            <div class="col-md-12 text-center text-white mt-5 fr" >
                <h6 class="mt-5 text-secondary">Get to now me</h6>
                <h1 class="ab1"><b>About Me</b></h1>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img src={pho} height={"600px"} width={"500px"} class="p-5" />
                </div>
                <div class="col-md-8" align="left">
                    <h1 class=" text-success text-justify mt-5">Who am i?</h1>
                    <h1 class=" fs-1 mb-10 text-light">I'm Suviksha, a visual UX/UI Designer and Web Developer</h1>
                    <p class="text-secondary fs-4">I am a freelancer based in the United Kingdom and i have been building noteworthy
                        UX/UI designs and websites for years, which comply with the latest design trends.
                        I help convert a vision and an idea into meaningful and useful products. Having a sharp eye
                        for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    <hr class="text-secondary" />
                    <div class="row">
                        <div class="col-md-4 text-light fs-5">
                            <p class=" ">Name: <span class="text-secondary">Suviksha</span></p>
                            <p>Age: <span class="text-secondary">21</span></p>
                        </div>
                        <div class="col-md-4 text-light fs-5" align="left">
                            <p>Email: <span class="text-success">suviksha84@gmail.com</span></p>
                            <p>From: <span class="text-secondary">Bangalore, India</span></p>
                        </div>
                        <div class="col-md-8 text-light">
                        <a href={blgg} download>
                            <button class="btn btn-lg bg-success btn-light border-success rounded-5">Download CV</button>
                            </a>
                            <span className='mx-4 text-secondary' style={{ whiteSpace: "pre", textDecorationLine: "line-through" }}>            </span>
                            <FaFacebookSquare class=' ms-2 gt'></FaFacebookSquare>
                            <FaLinkedin class=" ms-2 gt"></FaLinkedin>
                            <FaGithub class=" ms-2 gt"></FaGithub>
                            <FaInstagram class=" ms-2 gt"></FaInstagram>
                            <FaTwitter class="
                             ms-2 gt"></FaTwitter>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}