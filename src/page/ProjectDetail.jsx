import React, { useEffect, useState} from 'react'
import '../style/projectDetail.scss'
import WOW from 'wowjs';
import MainSection from '../component/detailPage/MainSection';
import IconSection from '../component/detailPage/IconSection';
import Point from '../component/detailPage/Point';
import { BiArrowToTop } from "react-icons/bi";
import Responsive from '../component/detailPage/Responsive';
import DesktopSection from '../component/detailPage/DesktopSection';
import MonitorSection from '../component/detailPage/MonitorSection';
import { useParams } from 'react-router-dom';



function ProjectDetail() {
  const {data} = useParams()
  console.log(data) 

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const [goToTop, setGoToTop] = useState(false)

  const changeValueScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 200) {
      setGoToTop(true)
    } else {
      setGoToTop(false)
    }

  }

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', changeValueScroll);

  return (
    <div className='projectDetail'>
      <MainSection/>
      <MonitorSection/>
      <IconSection/>
      <Point/>
      <DesktopSection/>
      <Responsive/>
      <button className={goToTop ? "goToTop active" : "goToTop"} onClick={scrollToTop} type="button"><BiArrowToTop/>
      </button>

    </div>

  )
}

export default ProjectDetail
