import React, { useRef ,useEffect} from 'react'
import cate1 from '../../../assets/images/png/italians-pizza-san-colombano-al-lambro.webp'
import cate2 from '../../../assets/images/png/italians-pizza-aperti-7-su-7-san-colombano-al-lambro.webp'
import cate3 from '../../../assets/images/png/h1_banner3.png'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'


import '../../../styles/category.css'

const categoryData = [
  {
    display1: 'Points ',
    display2: 'collection',
    link: 'ORDER NOW',
    path: '/Food',
    desc: 'Collect points,use them whenever you want ',
    img: cate1
  },
  {
    display1: 'As a gift',
    display2: 'for you',
    link: 'ORDER NOW',
    path: '/Food',
    desc: 'Collect points,use them whenever you want',
    img: cate2
  },
  {
    display1: 'We serve 12',
    display2: 'countries',
    link: 'WHO WE ARE',
    path: '/contact',
    img: cate3
  },

]
const Category = () => {

 

return (
  <>
    <div className="container">
      <div className="row3">
        {
          categoryData.map((item, index) => {
            return (
              <>
                <div className="col category__item" key={index}>
                  <div className="info">
                    <div className="text">
                      <h3>{item.display1}</h3>
                      <h3>{item.display2}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <Link to={item.path}>{item.link}</Link>
                  </div>
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </>
            )
          })

        }

      </div>
    </div>
  </>
)
}

export default Category
