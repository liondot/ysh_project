import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';
import '../style/project.scss'
import ProjectCon from '../component/ProjectCon'

function Project() {
  const {data} = useParams()
    console.log(data)

  const projectList = dummy.items.filter(item => 
    item.data === data
  )

  return (
      <div className='project'>
        <h2>{data === data ? data : ""}</h2>
        <div className='projectBox'>
        {projectList.map((item)=>{
          return (
            <ProjectCon key={item.title}
            title={item.title}
            subTitle={item.subTitle}
            github = {item.github}
            server = {item.server}
            pcImg = {item.pcImg}
            moImg = {item.moImg}
            skills = {item.skills}
            detailMain = {item.detailMain}
            fullImg = {item.detailFull}
            period = {item.period}
            state = {item.state}
            toDo = {item.toDo}
            preview = {item.preview}
            responsive = {item.responsive}
            />
          )
          })}
        </div>
          </div>
  )
}

export default Project
