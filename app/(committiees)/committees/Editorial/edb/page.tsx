export const metadata = {
    title: 'Editorial BoardMPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import group from '@/public/images/Group_Pics/edbcore.jpeg'
  import shivani from '@/public/images/core/EDB/SHIVANI SINGH_EDB.jpeg'
  import stock from '@/public/images/logo.png'
  import neel from '@/public/images/core/EDB/IMG_9737.jpg'
  import Jayesh from '@/public/images/core/EDB/DSC_0700.jpg'
  import Dhristi from '@/public/images/core/EDB/IMG_5978.jpg'



  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Editorial Board </h1>
              <p className="text-xl text-gray-400">The Editorial Cell Of MPSTME</p>
            </div>
  
            {/* Form */}
          <Image src={group} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">The Editorial Board of Student Council MPSTME aims to cultivate creativity and aims to bring together all those who are interested in literature, art, music, debates and pop culture alike. The board explores the shared elements of music and visual arts and plans to organize several events and activities relating to the same. Being one of the oldest committees the Editorial Board’s agenda comprises the Open Mic Night, Campaigns, Comic-Con, The Editorial Project and many more events, bringing together many celebrated artists, renowned authors and creators to inspire the generation’s enthusiastic young minds and encourage expressiveness. We strive to be the medium where literature fanatics, pop culture lovers, and fine art enthusiasts can come together to express their views and voice their opinions. Editorial Board aims to establish a platform with a community of people with kaleidoscopic tastes and interests. We leave no page unturned and no words left unsaid.</p> 
              </div>
            
            <h2 className="h2 mb-4">Our Team.</h2>
  
            <article className="flow">
  
        <div className="team">
          <ul className="auto-grid" role="list">
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Shivani Singh</h2>
                <p> Secretary</p>
                <Image alt="Prabir Kalwani" src={shivani} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Rafa Inamdar</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Neil </h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Jayesh </h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Dhristi Palresha</h2>
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
  