export const metadata = {
  title: 'Tech And Research Cell MPSTME ',
  description: 'Page description',
}

import '../../../../css/card.css'
import prabir from '@/public/images/prabirkalwani.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/ui/footer'
import hero from '@/public/images/loltrc.jpg'
import aryan from '@/public/images/core/TRC/IMG_0036.jpg'
import virati from '@/public/images/core/TRC/IMG_4530.jpg'
import aayush from '@/public/images/core/TRC/aayush.jpg'
import darsh from  '@/public/images/core/TRC/Darsh .jpeg'
export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Tech And Reserch Cell</h1>
            <p className="text-xl text-gray-400">The Technical Cell Of MPSTME</p>
          </div>

          {/* Form */}
        <Image src={hero} alt="TRC"width={3000} height={3000} />

        <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Vision.</h2>
            <p className="text-xl text-gray-400">Our vision is to foster a vibrant and inclusive campus community where every student feels empowered, engaged, and supported. We strive to be the voice of the student body, advocating for their needs and aspirations. Our aim is to create meaningful opportunities for personal and academic growth, while promoting a strong sense of belonging and unity among students from diverse backgrounds. Through collaboration, leadership development, and innovative initiatives, we aim to enhance the overall student experience and contribute to the holistic development of each individual. Together, let's build a brighter future for all students at our college!</p>
          </div>
          
          <h2 className="h2 mb-4">Our Team.</h2>

          <article className="flow">

      <div className="team">
        <ul className="auto-grid" role="list">
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Aryan Bondgulwar</h2>
              <p>Secretary</p>
              <Image alt="Prabir Kalwani" src={aryan} />
            </a>
          </li>
          <li>
            <a href="https://prabir.in" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Virati Chordiya</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={virati} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Aayush Shah</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={aayush} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Darsh Doshi</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={darsh} />
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
