import React from "react";
import '../Styles/Unlock.css'
export default function Unlock(){
    return(
        <>
     <div className="wrapper-unlock">
        <div className="left-unc">
            <img src="../Images/Unlock.jpg" alt="" height='350'/>
        </div>
        <div className="right-unc">
            <h2>How to design your site footer like we did
            </h2>
            <p style={{fontSize:"14px"}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="btn2">Learn More</button>
        </div>
    </div>
        </>
    )
}