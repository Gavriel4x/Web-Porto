import {useEffect, useState, useRef} from "react";
import Contacts from "./components/Contacts.jsx";
import work_experience from "./assets/data/work_experience.json";
import projects from "./assets/data/projects.json";
import certifications from "./assets/data/certifications.json";
import Navbar from "./components/Navbar.jsx";

export default function App() {

    const [displayDivTwo, setDisplayDivTwo] = useState("none");
    const [displayDivThree, setDisplayDivThree] = useState("none");
    const [displayDivFour, setDisplayDivFour] = useState("none");
    const [displayDivFive, setDisplayDivFive] = useState("none");  

    // observe component props
    const containerRef = useRef(null);
    const [activeId, setActiveId] = useState("");

    const callbackFunction = (entries) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            }
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

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

        //handle intersection observer
        const sections = document.querySelectorAll("div[id]");
        const observer = new IntersectionObserver(callbackFunction, options);
        sections.forEach((section) => observer.observe(section));

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", handlePointerLeave);
            observer.disconnect();
        };
    },[]);

    return (
        <div className="wrapper overflow hide-scrollbar">
            <div className="content-pane" style={{display:"flex", flexDirection:"column"}}>
                <Contacts/>
                <Navbar
                    activeId={activeId}
                />
                <div id="about" className="bio" ref={containerRef}>
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
                <div id="experience" className="experience" ref={containerRef}>
                    <div className="title-experience" style={{ display: "flex", alignItems:"center"}}>
                        <div className="svg-line" style={{height: "1px", backgroundColor:"#66d593"}} ></div>
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
                <div id="projects" className="projects" ref={containerRef}>
                    <div className="title-projects" style={{ display: "flex", alignItems:"center"}}>
                        <div className="svg-line" style={{height: "1px", backgroundColor:"#66d593"}} ></div>
                        <h2 className="projects-label sub-header">PROJECTS</h2>
                    </div>
                    <div className="wrapper-projects" style={{display:"flex", flexDirection:"column"}}>
                        {projects.map((project, index) => (
                            <div key={index} className="card-item-projects inner-wrapper-projects" style={{display:"flex",cursor: "pointer", gap:"36px", borderRadius:"10px"}}>
                                <img className="img-projects" src={project.image} alt={project.title} />
                                
                                <div className="container-projects" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                    <div className="container-item-projects" style={{display:"flex", flexDirection:"column"}}>
                                        <div className="title-project text-jetbrains-mono-bold white">{project.title}</div>
                                        <div className="description-project text-satoshi-regular white" style={{opacity:"70%"}}>{project.description}</div>
                                        <div className="wrapper-techstack" style={{display:"flex", flexDirection:"row"}}>
                                            {project.techstack.map((tech, techIndex) => (
                                                <div key={techIndex} className="techstack-project primary-green text-satoshi-regular"
                                                style={{backgroundColor: "rgba(102, 213, 147, 0.2)",
                                                    width: "fit-content",
                                                    padding: "3px 10px",
                                                }}
                                                >{tech}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="button-project text-jetbrains-mono-regular white text-zoom-out" style={{opacity: "70%", textAlign: "right"}}>View project →</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="button-all-projects text-jetbrains-mono-regular white" style={{cursor: "pointer", textAlign: "left"}}>View more projects →</div> */}
                </div>
                <div id="certifications" className="certifications" ref={containerRef}>
                    <div className="label-title-certifications" style={{ display: "flex", alignItems:"center"}}>
                        <div className="svg-line" style={{height: "1px", backgroundColor:"#66d593"}} ></div>
                        <h2 className="certifications-label sub-header">CERTIFICATIONS</h2>
                    </div>
                    <div className="wrapper-certifications" style={{display:"flex", cursor:"pointer", flexDirection:"column", maxWidth:"fit-content"}}>
                        {certifications.map((certification, index) => (
                            <div key={index} className="container-certifications">
                                <div className="title-certifications text-jetbrains-mono-bold white">{certification.title}</div>
                                <div className="description-certifications text-satoshi-regular white" style={{opacity:"70%"}}>{certification.institution} • {certification.date}</div>
                                <div className="button-certifications text-jetbrains-mono-regular white"
                                style={{backgroundColor: "rgba(39, 191, 101, 0.2)",
                                    width: "fit-content",
                                    padding: "3px 10px",
                                    opacity: "60%",
                                    borderRadius: "34px"
                                }}
                                >Show credential →</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}