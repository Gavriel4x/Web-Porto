import React, {useEffect, useState} from "react";

export default function App() {

    const [displayDivTwo, setDisplayDivTwo] = useState("none");
    const [displayDivThree, setDisplayDivThree] = useState("none");
    const [displayDivFour, setDisplayDivFour] = useState("none");
    const [displayDivFive, setDisplayDivFive] = useState("none");  

    useEffect(() => {
        console.log("start display");

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
                <h2 style={{ fontSize: "20px", marginBottom: "36px" }}>&gt; hello_iam</h2>

                <h1 style={{color:"white", fontSize: "64px" , marginBottom: "9px"}}>Gavriel Reynard</h1>

                <h2 style={{ fontSize: "32px", marginBottom: "36px" }}>Front-End Developer</h2>


                <h2 className="text-bio" style={{ fontSize: "22px", color: "#868686" }}>
                    
                    <div>I’m <a className="text-bio-bold">passionate about building clean and scalable web</a></div>
                    <div style={{display: displayDivTwo}}><a>applications</a>. I bring both technical expertise and</div>
                    <div style={{display: displayDivThree}}>strong product thinking skills to the products I</div>
                    <div style={{display: displayDivFour}}>build.</div>
                    <br/><br/>
                    <div style={{display: displayDivFive}}> Open <a style={{color: "#FEA2CD"}}>for</a> collaboration and opportunities.</div>
                </h2>
            </div>

        </div>
    );
}