import React from "react";
import "../styles/navbar.css"

export default function Navbar () {

    return (
        <div className="wrapper-nav" style={{display:"flex"}}>
            <div className="container-about" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div className="label text-jetbrains-mono-medium default-color">ABOUT</div>
                <div className="svg-line default-background-color" style={{ height:"1px"}} ></div>
            </div>
            <div className="container-experience" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div className="label text-jetbrains-mono-medium default-color">EXPERIENCE</div>
                <div className="svg-line default-background-color" style={{ height:"1px"}} ></div>
            </div>
            <div className="container-projects" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div className="label text-jetbrains-mono-medium default-color">PROJECTS</div>
                <div className="svg-line default-background-color" style={{ height:"1px"}} ></div>
            </div>
            <div className="container-certifications" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
                <div className="label text-jetbrains-mono-medium default-color">CERTIFICATIONS</div>
                <div className="svg-line default-background-color" style={{ height:"1px"}} ></div>
            </div>
        </div>
    );
};