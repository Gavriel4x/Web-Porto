import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProjectsDetail.css"

export default function ProjectsDetail() {

    const location = useLocation();
    const projectData = location.state;

    return (
        <div className="wrapper-project-detail">
            <div className="container-top">
                <img src={projectData.image} alt="" className="thumbnail" />
            </div>
            <div className="container-bottom">

            </div>
        </div>
    );
};