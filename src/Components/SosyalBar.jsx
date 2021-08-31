import React from 'react';
import "../sass/SosyalBar.css";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineYoutube } from "react-icons/ai";


function SosyalBar(){
    return(
        <div className="wrapper">
            <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span><ImFacebook /> </span>
            </div>
            <div className="icon twitter">
                <div className="tooltip">Twitter</div>
                <span><FaTwitter /></span>
            </div>
            <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span><RiInstagramFill /></span>
            </div>
            <div className="icon github">
                <div className="tooltip">Github</div>
                <span><VscGithub /></span>
            </div>
            <div className="icon youtube">
                <div className="tooltip">Youtube</div>
                <span><AiOutlineYoutube /></span>
            </div>
        </div>
    )
}

export default SosyalBar ;