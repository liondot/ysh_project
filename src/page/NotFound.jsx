import { Link } from "react-router-dom"
import '../style/notFound.scss'

function NotFound(){
    return(
        <div className='notFound'>
      <h3>해당 페이지를 찾지 못했습니다.</h3>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <Link className='goHome' to='/'>메인 페이지로 이동</Link>
    </div>
    )
}

export default NotFound