import { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import homeim from '../Images/homesss.jpg';


import './home.css'

export class Home1 extends Component {
    
    constructor(props) {
        super(props);
        this.state = { Name: "",i:0 }
        this.makeTimer();
    }

    makeTimer() {
        const arr = ['Designer', 'Developer', 'Learner','Freelancer'];
        setInterval(() => {
            this.setState({ name: arr[this.state.i] })
            if(this.state.i===arr.length-1)
            {
                this.setState({
                    i: 0
                })
            }
            else{
                this.setState({
                    i: this.state.i+1
                })
            }
        }, 2000);
    }
    render() {

        return (
            <div className="hg">
                <img src={homeim} height={"740px"} width={"100%"} />
            
                <h1 className="header">Suviksha</h1>
                <h1 className='hh1'>I am {this.state.name}</h1>
                
            </div>
        );
    }
}