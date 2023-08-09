import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Skill(){
    return(
        <div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4 text-light " align="left">
                    <h4 class="text-secondary">My level of knowledge in some tools</h4>
                    <h1 class="abw  pb-3"><b>My Skills</b></h1>
                </div>
            </div>
            <br /><br />
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-5" align="left">
                    <label for="file" class="text-light fs-4">Html/Css/90%</label><br/><br/>
                    <progress id="file" value="90" max="100" style={{width:"100%"}}></progress>
                </div>
                <div class="col-md-5" align="left">
                    <label for="file" class="text-light fs-4">React JS/70%</label><br></br><br/>
                    <progress id="file" value="70" max="100" style={{ width: "100%" }}> 32% </progress>
                </div>
            </div>


            <br /><br />
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-5" align="left">
                    <label for="file" class="text-light fs-4">Java/50%</label><br /><br />
                    <progress id="file" value="50" max="100" style={{ width: "100%" }}></progress>
                </div>
                <div class="col-md-5" align="left">
                    <label for="file" class="text-light fs-4">Python/60%</label><br></br><br />
                    <progress id="file" value="60" max="100" style={{ width: "100%" }}> 32% </progress>
                </div>
            </div>


            <br /><br />
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-5" align="left">
                    <label for="file" class="text-light fs-4">Bootstrap/80%</label><br /><br />
                    <progress id="file" value="80" max="100" style={{ width: "100%" }}></progress>
                </div>
                <div class="col-md-5" align="left">
                    <label for="file" class="text-light fs-4">C/C++/50%</label><br></br><br />
                    <progress id="file" value="50" max="100" style={{ width: "100%" }}> </progress>
                </div>
            </div>
            <br /><br /> <br /><br />
        </div>
    )
}