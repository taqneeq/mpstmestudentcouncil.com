export const metadata = {
  title: 'Tech And Research Cell MPSTME ',
  description: 'Page description',
}

import '../../../../css/card.css'
import prabir from '../../../../../public/images/prabir.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/ui/footer'

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
        <Image src="/images/hero-image-01.jpg" alt="TRC"width={3000} height={3000} />

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
            <a href="https://swop.link/cool" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
            </a>
          </li>
          <li>
            <a href="https://swop.link/cool" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
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
