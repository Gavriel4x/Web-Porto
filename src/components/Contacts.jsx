import React from "react";
import "../styles/contacts.css"

const githubLogo = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774539354/line-md_github_ltlgms.svg";
const linkedinLogo = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774539355/mingcute_linkedin-line_jjkt4p.svg";
const emailLogo = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774539354/ic_outline-email_telm3o.svg";
const line = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774539354/line-contacts_Desktop_laziqh.svg";
const line_ipad = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774595235/line_Ipad_jok7jj.svg";
const line_iphone = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774595235/line_Iphone_tnwbas.svg";

const onHoverGithubLogo = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774542724/Property_1_Variant2_tjg2eb.svg";
const onHoverLinkedinLogo = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774542724/Property_1_Variant2-1_ixwjsb.svg";
const onHoverEmailLogo = "https://res.cloudinary.com/dykphdvdb/image/upload/v1774542735/Property_1_Variant2-2_vpflf0.svg";

// 31x31, 2x703, 2x960 , 2x100
const screenWidth = window.innerWidth;

export default function contacts () {

    return (
        <div className="wrapper-contacts">
            <div className="container-contacts">
                <img src={githubLogo} 
                    onMouseOver={(e) => {e.currentTarget.src = onHoverGithubLogo}} 
                    onMouseOut={(e) => {e.currentTarget.src = githubLogo}} 
                    style={{cursor:"pointer"}}
                alt="github logo" className="logo" /> 
                <img src={linkedinLogo} 
                    onMouseOver={(e) => {e.currentTarget.src = onHoverLinkedinLogo}} 
                    onMouseOut={(e) => {e.currentTarget.src = linkedinLogo}} 
                    style={{cursor:"pointer"}}
                alt="linkedin logo" className="logo" /> 
                <img src={emailLogo} 
                    onMouseOver={(e) => {e.currentTarget.src = onHoverEmailLogo}} 
                    onMouseOut={(e) => {e.currentTarget.src = emailLogo}} 
                    style={{cursor:"pointer"}}
                alt="email logo" className="logo" /> 
            </div>
            <img src={(() => {
                
                if(screenWidth > 1024) {
                    return line;
                }
                else if(screenWidth > 402) {
                    return line_ipad
                }
                else {
                    return line_iphone;
                }

            })()} alt="line" className="line" /> 
        </div>
    );
    
}