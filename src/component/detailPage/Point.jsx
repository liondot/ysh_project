import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import '../../style/point.scss'

function Point() {
  const {state} = useLocation()

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <SamplePrevArrow />,
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#333" , width: "50px", height: "50px", borderRadius:"50%", fontSize: "30px", lineHeight:"50px", paddingLeft:"15px"}}
        onClick={onClick}
      />
    );
  }


  const [scroll, setScroll] = useState(false)

  const changeValueScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue > 820){
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', changeValueScroll);

  return (
    <div className="point">
        <h3>Preview</h3>
        <span className={scroll ? "middleLine active" : "middleLine"}>
        </span>
        <div className='pointImg wow fadeInUp'>
          <div className="point_p">
            <img src={state.fullImg} alt="" />
          </div>
          <div className='slickBox'>
          <Slider {...settings}>
              <div className='slick'>
                <div>{state.preview[0].length > 0 ? <div className='slickImg'><p>PREVIEW 01</p>{state.preview[0]}</div> :"false"}</div>
              </div>
              <div className='slick'>
              <div>{state.preview[1].length > 0 ? <div className='slickImg'><p>PREVIEW 02</p>{state.preview[1]}</div> : "false"}</div>
              </div>
              <div className='slick'>
              <div>{state.preview[2].length > 0 ? <div className='slickImg'><p>PREVIEW 03</p>{state.preview[2]}</div> : "false"}</div>
              </div>
              <div className='slick'>
              <div>{state.preview[3].length > 0 ? <div className='slickImg'><p>PREVIEW 04</p>{state.preview[3]}</div> : false} </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
  )
}

export default Point
