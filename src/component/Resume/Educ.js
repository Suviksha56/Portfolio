import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export function Educ(props) {
    return (
        <div>
            <div>
            <label  class="text-light fs-4">{props.subject}</label><br /><br />
            <progress id="file" max="100" style={{ width: "100%" }}>{props.v}</progress>
        </div>
        </div>
    )
} 