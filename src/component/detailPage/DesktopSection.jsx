import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../style/desktopSection.scss";
import { BiMouse  } from "react-icons/bi";
import { CiDesktop } from "react-icons/ci";


function DesktopSection() {
  const { state } = useLocation();
  const [active, setActive] = useState(false)

  const changeValueScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue > 2900){
      setActive(true)
    } else {
      setActive(false)
    }

  }

  window.addEventListener('scroll', changeValueScroll);

  return (
    <div className="desktopSect">
      <h3 className="wow fadeInUp">Responsive Web Simulation</h3>
      <span className="subTitle fadeInUp">Desktop & Mobile</span>
      <span className={active ? "middleLine active" : "middleLine"}></span>
      <div className="monitor wow fadeInUp">
        <div className="desktopDesc wow fadeInUp">
          <CiDesktop className="icon"/>
          <span>Desktop Ver</span>
        </div>
        <img className="monitor_bg" src="../../image/monitor.png" alt="monitor_bg" />
        <div className="innerImg">
          <img src={state.fullImg} alt="full img" />
        </div>
        <span className="scroll wow fadeInUp" data-wow-delay=".2s">
          <BiMouse className="icon"/>
          SCROLL - DOWN
        </span>
      </div>
    </div>
  );
}

export default DesktopSection;
