import React from "react";
import Webcam from "react-webcam";
import s from "./camera.module.css"
const Camera = () => {
    return(
      <div className={s.wrapp}>
        <p className={s.perv}>le   perv</p>
        <img alt="" className={s.img} src="https://svgsilh.com/svg/147745.svg"/>
        <div>
          <Webcam className={s.camera} mirrored={true}/>
        </div>
      </div>
    )
}

export default Camera