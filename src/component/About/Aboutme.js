import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import homeim from '../Images/homesss.jpg';
import './about.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export function Aboutme() {
    return (
        <div>
            <div class="col-md-12 text-center text-white fr" >
                <h4 class="mt-5">Get to now me</h4>
                <h1 class="ab1">About Me</h1>
            </div>
            <div class="row">
                <div class="col-md-4 p-3">
                    <img src={homeim} height={"600px"} width={"500px"} class="p-5" />
                </div>
                <div class="col-md-8" align="left">
                    <h1 class=" text-success text-justify mt-5">Who am i?</h1>
                    <h1 class=" fs-1 mb-10 text-light">I'm Suviksha, a visual UX/UI Designer and Web Developer</h1>
                    <p class="text-light fs-4">I am a freelancer based in the United Kingdom and i have been building noteworthy
                        UX/UI designs and websites for years, which comply with the latest design trends.
                        I help convert a vision and an idea into meaningful and useful products. Having a sharp eye
                        for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    <hr class="text-secondary" />
                    <div class="row">
                        <div class="col-md-4 text-light fs-5">
                            <p class=" ">Name: Suviksha</p>
                            <p>Age: 21</p>
                        </div>
                        <div class="col-md-4 text-light fs-5" align="left">
                            <p>Email: suviksha84@gmail.com</p>
                            <p>From: Bangalore, India</p>
                        </div>
                        <div class="col-md-8 text-light">
                            <button class="btn btn-lg bg-success btn-light border-success rounded-5">Download CV</button>
                            <span className='mx-4 text-secondary' style={{ whiteSpace: "pre", textDecorationLine: "line-through" }}>            </span>
                            <FaFacebookSquare class='flogo ms-2 gt'></FaFacebookSquare>
                            <FaLinkedin class="lklogo ms-2 gt"></FaLinkedin>
                            <FaGithub class="gtlogo ms-2 gt"></FaGithub>
                            <FaInstagram class="inslogo ms-2 gt"></FaInstagram>
                            <FaTwitter class="twlogo ms-2 gt"></FaTwitter>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}