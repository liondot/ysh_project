import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../style/iconSection.scss'
import { FaPenNib, FaLaptop, FaRegCalendarAlt, FaRegCheckSquare } from "react-icons/fa";

function IconSection() {
    const {state} = useLocation()

  return (
    <div className="iconSection">
        <ul>
          <li className='wow fadeInUp'><span><FaPenNib/></span><p>{state.skills}</p></li>
          <li className='wow fadeInUp' data-wow-delay='.2s'><span><FaLaptop/></span><p>{state.state}</p></li>
          <li className='wow fadeInUp' data-wow-delay='.4s'><span><FaRegCalendarAlt/></span><p>약 {state.period}일 소요</p></li>
          <li className='wow fadeInUp' data-wow-delay='.6s'><span><FaRegCheckSquare/></span><p>{state.toDo}</p></li>
        </ul>
      </div>
  )
}

export default IconSection
