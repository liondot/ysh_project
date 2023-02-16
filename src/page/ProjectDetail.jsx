import React, { useEffect, useState} from 'react'
import {  useLocation } from 'react-router-dom'
import '../style/projectDetail.scss'
import WOW from 'wowjs';
import MainSection from '../component/detailPage/MainSection';
import IconSection from '../component/detailPage/IconSection';
import Point from '../component/detailPage/Point';
import { BiArrowToTop } from "react-icons/bi";



function ProjectDetail() {
  const {state} = useLocation()

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const [active, setActive] = useState(false)
  const [goToTop, setGoToTop] = useState(false)

  const changeValueScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 1960){
      setActive(true)
    } else {
      setActive(false)
    } 

    if(scrollValue > 200) {
      setGoToTop(true)
    } else {
      setGoToTop(false)
    }
  }

  window.addEventListener('scroll', changeValueScroll);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  return (
    <div className='projectDetail'>
      <MainSection/>
      <IconSection/>
      <Point/>
      <div className="fullImg">
      <h3 className='wow fadeIn'>사이트 전체보기</h3>
      <span className={active ? "middleLine active" : "middleLine"}></span>
        <img src={state.fullImg} alt=""  className="wow fadeIn"/>
      </div>
      <button className={goToTop ? "goToTop active" : "goToTop"} onClick={scrollToTop} type="button"><BiArrowToTop/></button>
    </div>

  )
}

export default ProjectDetail
