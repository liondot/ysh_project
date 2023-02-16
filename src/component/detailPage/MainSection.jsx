import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";
import '../../style/mainSection.scss'

function MainSection() {
    const {state} = useLocation()

    const [topBtn, setTopBtn] = useState(0);
    const updateScroll = () => {
      setTopBtn(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });


  return (
    <div>
       <div className="main_section">
          <div className={topBtn < 100 ? "topBtn" : "changeTopBtn"}>
            <ul className='wow bounce' data-wow-delay='.2s'>
              <li><Link to='/'><span>Home</span><BiHome/></Link></li>
              <li><Link to={state.github}><span>GITHUB</span><GoMarkGithub/></Link></li>
              <li><Link to={state.server}><span>SERVER</span><FiMonitor/></Link></li>
            </ul>
          </div>
        <div className="mainImg wow fadeIn">
          <img src={state.fullImg} alt="" />
        </div>
        <div className="mainDesc">
          <h2 className='wow fadeInUp'>{state.title}</h2>
          <span className="middleLine wow fadeInUp" data-wow-delay='.2s'></span>
          <p className="wow fadeInUp" data-wow-delay='.2s'>{state.subTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default MainSection
