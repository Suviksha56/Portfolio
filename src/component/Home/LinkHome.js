import { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';



export class Home2 extends Component {
    render() {
        return (
            <div class="">
                <FaFacebookSquare class='flogo'></FaFacebookSquare>
                <FaLinkedin class="lklogo "></FaLinkedin>
                <FaGithub class="gtlogo "></FaGithub>
                <FaInstagram class="inslogo "></FaInstagram>
                <FaTwitter class="twlogo"></FaTwitter>
            </div>
        )
    }
}