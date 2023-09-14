export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'
import '../../../css/morecards.css'
import trc from '../../../../public/images/trc.png'
export default function Committees() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Technical Committees</h1>
          </div>
          



          <ul className="cards">

          <li>
    <a href="/committees/Technical/TRC" className="card">
    <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />

      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">TRC</h3>            
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="card">
    <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />

      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">TRC</h3>            
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="card">
    <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />

      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">TRC</h3>            
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
</ul>
</div>
</div>
</section>






  )
}
