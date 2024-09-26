import React from "react";
import linkedinIcon from "../../Assets/Images/nav-icon1.svg";
import facebookIcon from "../../Assets/Images/nav-icon2.svg";
import instagramIcon from "../../Assets/Images/nav-icon3.svg";
import RefPathData from "../../RefPathData";

const SocialIconsList : RefPathData[] = [
    {
        imagePath: linkedinIcon,
        htmlPath : "https://www.linkedin.com/in/niall-o-%CC%81reilly-b0291b24b/"
    },

    {
        imagePath: facebookIcon,
        htmlPath : "https://www.facebook.com/niall.oreilly.9678/"
    },

    {
        imagePath: instagramIcon,
        htmlPath : "https://www.instagram.com/niall.blackrock/"
    }
]

export default class SocialIcons extends React.Component<any, any>
{
    render()
    {
        return (
            <div className="social-icon">
                {SocialIconsList.map((icon: RefPathData, index : number) => (
                    <a
                        key={index}
                        href={icon.htmlPath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={icon.imagePath} alt={`Social icon ${index + 1}`}/>
                    </a>
                ))}
            </div>
        );
    }
}