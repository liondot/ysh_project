import { useLocation } from "react-router-dom";
import "../../style/responsive.scss";
import { BiMouse } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";

function Responsive() {
  const { state } = useLocation();


  return (
    <div className="responsive wow fadeInUp">
     
      <div className="responsive_view wow fadeInUp">
        <div className="mobileText wow fadeInUp" data-wow-delay=".2s">
          <CiMobile3 className="icon verText"/>
          <span>
            Mobile Ver
          </span>
        </div>
        <div className="mobile_web">
          <img src="../../image/iphone.png" alt="device_bg" />
        </div>
        <div className="mobilePage">
          <img src={state.responsive} alt="mobile" />
        </div>
        <div className="mobileDesc">
          <span className="wow fadeInUp">
            <BiMouse className="icon" />
            SCROLL - DOWN
          </span>
        </div>
      </div>
    </div>
  );
}

export default Responsive;
