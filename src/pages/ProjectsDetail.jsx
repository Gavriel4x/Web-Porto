import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/projectsDetail.css"

export default function ProjectsDetail() {

    const location = useLocation();
    const navigate = useNavigate();
    const projectData = location.state;

    return (
        <div className="wrapper-project-detail overflow hide-scrollbar" style={{height:"952px"}}>
            <div className="button-back-projects-detail text-jetbrains-mono-regular white" onClick={() => navigate('/Web-Porto/')} style={{fontSize:"20px", cursor:"pointer"}}>
                ← Gavriel Reynard
            </div>
            <div className="container-top">
                <div className="text-description text-jetbrains-mono-bold primary-green" style={{fontSize:"36px"}}>{projectData.description}</div>
                <div className="container-top-inner" style={{display:"flex", flexDirection:"column", marginTop:"32px", gap:"26px"}}>
                    <div className="container-role" style={{display:"flex", flexDirection:"row", gap:"86px"}}>
                        <div className="label-projects-detail label-role text-jetbrains-mono-regular white-70" style={{fontSize:"22px"}}>ROLE</div>
                        <div className="text-role text-satoshi-regular white-70"  style={{fontSize:"22px"}}>{projectData.role}</div>
                    </div>
                    <div className="container-techstack" style={{display:"flex", flexDirection:"row", gap:"86px"}}>
                        <div className="label-projects-detail label-techstack text-jetbrains-mono-regular white-70" style={{fontSize:"22px"}}>TECH</div>
                        <div className="wrapper-techstack" style={{display:"flex", flexDirection:"row", gap:"12px"}}>
                            {projectData.techstack.map((tech, techIndex) => (
                                <div key={techIndex} className="techstack-project primary-green text-satoshi-regular"
                                style={{backgroundColor: "rgba(102, 213, 147, 0.2)",
                                    width: "fit-content",
                                    padding: "3px 10px",
                                    fontSize: "16px"
                                }}
                                >{tech}</div>
                            ))}
                        </div>
                    </div>
                    <div className="container-url" style={{display:"flex", flexDirection:"row", gap:"86px"}}>
                        <div className="label-projects-detail label-url text-jetbrains-mono-regular white-70" style={{fontSize:"22px"}}>URL</div>
                        <a className="text-url text-satoshi-regular white-70"  style={{fontSize:"22px", cursor:"pointer", textDecoration:"none"}}
                            target="_blank"
                            href={projectData.github}
                        >
                            {projectData.github} <img src="https://res.cloudinary.com/dykphdvdb/image/upload/v1774860333/openlink_bnlxsc.svg" alt="" className="image-openlink" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-bottom" style={{marginTop:"126px",display:"flex", flexDirection:"column", gap:"44px"}}>
                <div className="text-first-section text-satoshi-regular white-70" style={{fontSize:"22px", textAlign:"justify"}}>{projectData.detail}</div>
                <div className="image-showcase">
                    {projectData['image-showcase'][0] ? (
                        <>
                            <img 
                                src={projectData['image-showcase'][0]} 
                                alt="" 
                                className="first-image image" 
                            />
                            <img 
                                src={projectData['image-showcase'][1]} 
                                alt="" 
                                className="second-image image" 
                            />
                        </>
                    ) : null}
                    
                </div>
                <div className="text-second-section text-satoshi-regular white-70" style={{fontSize:"22px", textAlign:"justify"}}>{projectData.showcase}</div>
            </div>
        </div>
    );
};