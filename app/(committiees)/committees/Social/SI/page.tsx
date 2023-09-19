export const metadata = {
  title: 'Social Impact ',
  description: '',
}

import '@/app/css/card.css'
import prabir from '../../../../../public/images/prabir.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/ui/footer'
import cult from '@/public/images/Group_Pics/Si.jpeg'
import stock from '@/public/images/logo.png'
import aashir from '@/public/images/core/SI/Aashir.png'
import advit from '@/public/images/core/SI/Advait.jpg'
import kshama from '@/public/images/core/SI/Kshama_.jpg'
import anushka from '@/public/images/core/SI/IMG-6516.jpg'


export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Social Impact</h1>
            <p className="text-xl text-gray-400">Social Cell MPSTME </p>
          </div>

          {/* Form */}
        <Image src={cult} alt="TRC"width={3000} height={3000} />

        <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Vision.</h2>
            <p className="text-xl text-gray-400">MPSTME’s Social Impact is a student council committee which preaches the motto ‘’great things are done by a series of small things brought together”. All members of this committee work unitedly towards a single goal, which is to exhaust the resources at hand to extend help to all who need it. The Social Impact, in association with different NGO’s, works tirelessly towards eradication of various issues plaguing the society, like Female Health and Sanitation and Importance of Mental Health. The aim of the committee is to make a significant difference to the lives of people in need by contributing little by little to the cause each day.

</p>            </div>
          
          <h2 className="h2 mb-4">Our Team.</h2>

          <article className="flow">

      <div className="team">
        <ul className="auto-grid" role="list">
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Aashir Ibrahim</h2>
              <p>Secretary</p>
              <Image alt="Prabir Kalwani" src={aashir} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Advit Udyabhanu</h2>
              <p> Secretary</p>
              <Image alt="Prabir Kalwani" src={advit} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Yazad BarodiWala</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={stock} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Kshama Purohit</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={kshama} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Anushka Pujari </h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={anushka} />
            </a>
          </li>
         
          
        </ul>
      </div>
    </article>
          

          

        </div>
      </div>
    </section>

        </div>
      </div>
      <Footer />

    </section>
    
  )
}
