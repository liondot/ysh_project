import { Link } from 'react-router-dom'
import dummy from '../db/data.json'
import '../style/home.scss'

function Home() {

  return (
    <div className="home" >
      <h2>전체보기</h2>
     <ul>
         {dummy.projects.map(data => (
                <li key={data.id} className="item">
                  <Link to={`./data/${data.data}`}><h3>Title :</h3> {data.data}</Link></li>
            ))}
     </ul>
    </div>
  )
}

export default Home
