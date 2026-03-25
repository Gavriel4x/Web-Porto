import {useEffect, useState} from "react";
import work_experience from "./assets/data/work_experience.json";
import projects from "./assets/data/projects.json";

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

        const handlePointerMove = (event) => {
            const x = `${event.clientX}px`;
            const y = `${event.clientY}px`;
            document.documentElement.style.setProperty("--cursor-x", x);
            document.documentElement.style.setProperty("--cursor-y", y);
            document.documentElement.classList.remove("pointer-out");
        };

        const handlePointerLeave = () => {
            document.documentElement.classList.add("pointer-out");
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, []);

    return (
        <div className="wrapper overflow hide-scrollbar">
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
                        <img className="svg-line" src="./src/assets/line.svg" alt=""style={{height: "1px", backgroundColor:"#66d593"}} />
                        <h2 className="experience-label sub-header">EXPERIENCE</h2>
                    </div>
                    <div className="wrapper-experience">
                        {work_experience.map((experience, index) => (
                            <div key={index} className="card-item-experience" style={{display:"flex", alignItems:"flex-start"}}>
                                <div className="text-experience-year text-jetbrains-mono-regular text-description-grey-50">{experience.year}</div>

                                <div className="container-experience">
                                        <div className="text-experience-title white text-jetbrains-mono-bold">{experience.position} • {experience.company}</div>
                                        
                                        <div className="text-experience-description text-satoshi-regular text-description-grey-50">{experience.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="projects">
                    <div className="title-projects" style={{ display: "flex", alignItems:"center"}}>
                        <img className="svg-line" src="./src/assets/line.svg" alt=""style={{height: "1px", backgroundColor:"#66d593"}} />
                        <h2 className="projects-label sub-header">PROJECTS</h2>
                    </div>
                    <div className="wrapper-projects">
                        {projects.map((project, index) => (
                            <div key={index} className="card-item-projects" style={{display:"flex"}}>
                                <img src={`./src/assets/projects/${project.image}`} alt={project.title} />
                                
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}