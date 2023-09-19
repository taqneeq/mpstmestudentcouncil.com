export const metadata = {
  title: 'Social Impact ',
  description: '',
}

import '@/app/css/card.css'
import prabir from '../../../../../public/images/prabir.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/ui/footer'
import cult from '@/public/images/features-03-image-01.png'
import stock from '@/public/images/logo.png'
import Tushita from '@/public/images/core/Cult/Tushita Shetty.jpg'
import Arpit from  '@/public/images/core/Cult/BDCB2C25-02B3-47DE-A613-9810C2F2F1C8.jpg'
import Ishwari from '@/public/images/core/Cult/IMG_1597.png'

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Cultural Committiee</h1>
            <p className="text-xl text-gray-400">Cultural Cell MPSTME </p>
          </div>

          {/* Form */}
        <Image src={cult} alt="TRC"width={3000} height={3000} />

        <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Vision.</h2>
            <p className="text-xl text-gray-400">When it comes to talking numbers and matters of money, nobody does it better than us. Colloquium, The Business and Management Cell of the Students’ Council, aims towards collaborating with the corporate world while acclimating the team to enter the professional arena. Partnering with the biggest of banks, brands and tech giants like OnePlus, ICICI Bank, Starbucks, Axis Bank, NSDL, LinkedIn, Snapchat and Ebay are just specks in a plethora of achievements we boast here at Colloquium. We believe in the ethos of “If work isn’t fun, you’re not playing on the right team”. Helping students become more confident, knowledgeable and marketable, and providing them with opportunities to create long-lasting relationships with like-minded individuals has always been at the top of our list.</p>            </div>
          
          <h2 className="h2 mb-4">Our Team.</h2>

          <article className="flow">

      <div className="team">
        <ul className="auto-grid" role="list">
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Aayush Mamunkar</h2>
              <p>Secretary</p>
              <Image alt="Prabir Kalwani" src={stock} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Shekhar Ojha</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={stock} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Tushita Shetty</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={Tushita} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Ishwari Birje</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={Ishwari} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Arpit Bhalla</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={Arpit} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Krish Shah</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={stock} />
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
