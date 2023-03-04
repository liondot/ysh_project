import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../style/projectCon.scss'
import { FaHome} from 'react-icons/fa';

function ProjectCon(props) {
    const navigate = useNavigate()
    const a = useParams()
    const data = a.data

    const onClickProject = () => {
        navigate(`/data/${data}/${props.title}`,{
            state: props
        })
    }


  return (
    <div className='projectCon' key={props.title}>  
      <ul className='items'>
        <li className='item' onClick={onClickProject}>
          <div className="itemImg">
           <img src={props.fullImg} alt="" />
          </div>
          <div className="itemDesc">
            <div className="iconList">
            <span className='pgDetail'>
              <FaHome/>
            </span>
            </div>
            <div className="itemTxt">
            <p>{props.title}</p>
            <p className='subTitle'>{props.subTitle}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProjectCon
