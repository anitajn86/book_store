import React from "react";
import './image2.css'

const Image =({src}) =>{
    return(
        <div className="image-container">
          <img src={src} alt="Your image" className="backgroundImage" />
        </div>
    );
}
export default Image;