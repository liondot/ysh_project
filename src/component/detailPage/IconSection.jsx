import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../style/iconSection.scss'
import { FaPenNib, FaLaptop, FaRegCalendarAlt, FaRegCheckSquare } from "react-icons/fa";

function IconSection() {
    const {state} = useLocation()

  return (
    <div className="iconSection">
        <ul>
        <li className='wow fadeInUp'><span><FaRegCheckSquare/></span><p>{state.title}</p></li>
          <li className='wow fadeInUp'><span><FaPenNib/></span><p>{state.skills}</p></li>
          <li className='wow fadeInUp' data-wow-delay='.2s'><span><FaLaptop/></span><p>{state.state}</p></li>
          <li className='wow fadeInUp' data-wow-delay='.4s'><span><FaRegCalendarAlt/></span><p>약 {state.period} 소요</p></li>
        </ul>
        <img src={state.mobileImg} alt="" />

      </div>
  )
}

export default IconSection
