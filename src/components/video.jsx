import React from "react";
import { video } from "../assets/images";

const VideoBg = () => {
    return(
        <div className="videobg">
         <div className="overlay"></div>
            <video src={video} alt="" autoPlay muted loop />
          <div className="contentvideo">
            <h1>We Are A Sports Brand</h1>
            <p>Mlimani City | Dar Es Salaam City | Magomeni City | Mombasa City</p>
            <button className="shop-now-btn">SHOP NOW</button>
          </div>
          </div>
    )
}
export default VideoBg;