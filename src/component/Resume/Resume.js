import { Education } from "./Educaton";
import { Skill } from "./Skill";
// import { Work } from "./work";
export function Resume(){
    return(
        <div>
            <Education></Education>
            <Skill></Skill>
            {/* <Work></Work> */}
        </div>
    )
}