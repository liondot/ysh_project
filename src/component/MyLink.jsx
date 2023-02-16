import React from 'react'
import { BiDesktop } from "react-icons/bi";
import { AiFillGithub, } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../style/myLink.scss'

function MyLink() {
  return (
    <div className='myLink'>
      <ul>
        <li><Link to="https://www.naver.com"><AiFillGithub/></Link></li>
        <li><Link to=""><BiDesktop/></Link></li>
      </ul>
    </div>
  )
}

export default MyLink
