// import { Component } from 'react';
// import 'D:/React11/Projectss/proj1/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import homeim from '../component/homesss.jpg';

// import { FaFacebookSquare } from 'react-icons/fa';
// import '..//home.css'

// export class Home1 extends Component{
//     constructor(props) {
//         super(props);
//         this.state = { Name: "" }
//         this.makeTimer();
//     }

//     makeTimer() {
//         setInterval(() => { 
//             this.setState({ name: "Developer" })
//         }, 1000);
//         setInterval(() => {
//             this.setState({ name: "Designer" })
//         }, 5000);
//         setInterval(() => {
//             this.setState({ name: " Freelancer" })
//         }, 9000);
//     }
//     render(){
        
//         return(
//             <div className="hg">
//                <img src={homeim} height={"740px"} width={"100%"}/>

//                <h1 className="header">Suviksha</h1>
//                <h1 className='hh1'>I am {this.state.name}</h1>
//                <div><FaFacebookSquare className='flogo'></FaFacebookSquare></div>
//             </div>
//         );
//     }
// }