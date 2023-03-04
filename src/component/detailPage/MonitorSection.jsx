import React from "react";
import { useLocation } from "react-router-dom";
import "../../style/monitorSection.scss";

function MonitorSection() {
  const { state } = useLocation();

  return (
    <div className="monitorSection">
      <div className="monitorOuter">
        <div className="monitor wow fadeInUp">
          <img src="../../image/monitor.png" alt="monitor" />
          <div className="innerMonitor">
            <img src={state.fullImg} alt="" />
          </div>
        </div>
        <div className="mobile wow fadeInUp" data-wow-delay='.2s'>
          <img src="../../image/iphone.png" alt="mobile" />
          <div className="innerMobile">
            <img src={state.responsive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorSection;
