import React from 'react'
import { Link } from 'react-router-dom'
import { BiDesktop } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import '../style/myLink.scss'
import { FaPinterestP } from "react-icons/fa";

function MyLink() {
  return (
       <div className="myLink">
        <ul>
          <li>
            <Link to="https://github.com/liondot" title='github link'>
              <AiFillGithub />
            </Link>
          </li>
          <li>
            <Link to="https://liondot.github.io/yoon_portfolio/" title='portfolio link'>
              <BiDesktop />
            </Link>
          </li>
          <li>
            <Link to="https://www.pinterest.co.kr/sunflo_512/" title='pinterest link'>
                <FaPinterestP/>
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default MyLink
