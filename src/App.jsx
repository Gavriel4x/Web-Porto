import React, {useEffect, useState} from "react";
import work_experience from "./assets/data/work_experience.json";

export default function App() {

    const [displayDivTwo, setDisplayDivTwo] = useState("none");
    const [displayDivThree, setDisplayDivThree] = useState("none");
    const [displayDivFour, setDisplayDivFour] = useState("none");
    const [displayDivFive, setDisplayDivFive] = useState("none");  

    useEffect(() => {
        const t1 = setTimeout(() => setDisplayDivTwo("revert"), 3000);
        const t2 = setTimeout(() => setDisplayDivThree("revert"), 6000);
        const t3 = setTimeout(() => setDisplayDivFour("revert"), 8750);
        const t4 = setTimeout(() => setDisplayDivFive("revert"), 9250);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, []);

    return (
        <div className="content-pane">

            <div className="bio">
                <h2 className="bio-label">&gt; hello_iam</h2>

                <h1 className="bio-name">Gavriel Reynard</h1>

                <h2 className="bio-title">Front-End Developer</h2>

                <h2 className="text-bio" style={{ color: "#868686" }}>

                    <div>I’m <a className="text-bio-bold">passionate in building clean scalable web</a></div>
                    <div style={{display: displayDivTwo}}><a>applications</a>. I bring both technical expertise &</div>
                    <div style={{display: displayDivThree}}>strong product thinking skills to the products I</div>
                    <div style={{display: displayDivFour}}>build.</div>
                    <br/><br/>
                    <div style={{display: displayDivFive}}> Open <a style={{color: "#FEA2CD"}}>for</a> collaboration and opportunities.</div>
                </h2>
            </div>
            <div className="experience">
                <div className="title-experience" style={{ display: "flex", alignItems:"center"}}>
                    <h2 className="experience-label">EXPERIENCE</h2>
                </div>
            </div>
        </div>
    );
}