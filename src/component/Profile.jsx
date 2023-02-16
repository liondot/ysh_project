import { Link } from 'react-router-dom'
import '../style/profile.scss'

function Profile() {

  const profileImg = {
    src:"./image/profile.jpg",
    alt:"profile"
}

  return (
    <div className="profile">
        <Link to='./'>
        <div className="my_image">
            <img src={profileImg.src} alt='프로필' />
        </div>
        <div className="desc">
            <span className='myName'>윤선화</span>
            <span className='myJob'>프론트엔드</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo.</p>
        </div>
        </Link>
    </div>
  )
}

export default Profile
