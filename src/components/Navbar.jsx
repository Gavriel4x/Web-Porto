import React from "react";
import "../styles/navbar.css"

export default function Navbar (props) {

    return (
        <div className="wrapper-nav" style={{display:"flex"}}>
            <div className="container-about" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div id="text-about" className={`label text-jetbrains-mono-medium default-color ${props.activeId === "about" ? "active-color" : ""}`}>ABOUT</div>
                <div id="line-about" className={`svg-line default-background-color ${props.activeId === "about" ? "active-background-color" : ""}`} style={{ height:"1px"}} ></div>
            </div>
            <div className="container-experience" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div id="text-experience" className={`label text-jetbrains-mono-medium default-color  ${props.activeId === "experience" ? "active-color" : ""}`}>EXPERIENCE</div>
                <div id="line-experience" className={`svg-line default-background-color ${props.activeId === "experience" ? "active-background-color" : ""}`} style={{ height:"1px"}} ></div>
            </div>
            <div className="container-projects" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div id="text-projects" className={`label text-jetbrains-mono-medium default-color ${props.activeId === "projects" ? "active-color" : ""}`}>PROJECTS</div>
                <div id="line-projects" className={`svg-line default-background-color ${props.activeId === "projects" ? "active-background-color" : ""}`} style={{ height:"1px"}} ></div>
            </div>
            <div className="container-certifications" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div id="text-certifications" className={`label text-jetbrains-mono-medium default-color ${props.activeId === "certifications" ? "active-color" : ""}`}>CERTIFICATIONS</div>
                <div id="line-certifications" className={`svg-line default-background-color ${props.activeId === "certifications" ? "active-background-color" : ""}`} style={{ height:"1px"}} ></div>
            </div>
        </div>
    );
};