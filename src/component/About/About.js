import { Aboutme } from './Aboutme';
import { Services } from './Services';
// import { Test } from './Testimonials';
import { Plan } from './Plan';
export function About(){
    return(
        <div>
            <Aboutme></Aboutme>
            <Services></Services>
            {/* <Test></Test> */}
            <Plan></Plan>
        </div>
    )
}