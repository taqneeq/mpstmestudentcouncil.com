export const metadata = {
    title: 'Tech And Research Cell MPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/Group_Pics/sports.jpeg'
  import pratham from '@/public/images/core/Sports/IMG_20230830_230523_548.jpg'
  import sanya from '@/public/images/core/Sports/IMG_6247.png'
  import vansh from '@/public/images/core/Sports/IMG_3852.jpg'
  import stock from '@/public/images/logo.png'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Sports Commiittee</h1>
              <p className="text-xl text-gray-400">The Sports Cell Of MPSTME</p>
            </div>
  
            {/* Form */} 
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">A team that works together and makes sure that every event is carried out with great enthusiasm and teamwork or as we would like to say, a team that gets tanned together, stays together. We manage all the various sports teams of our college namely Cricket, Basketball, Table Tennis and Football and we make sure we organize amazing events for all the exceptionally talented teams. Events such as College Cricket League, Neymar Jr. Five & College Turf Tournament, Intra College Table Tennis and Carrom Tournament, Gamers Asylum and much more. Alongside organizing events for the students, we also organize events for the faculty and staff. Our motive is to further increase female participation in various events.</p>
            </div>
            
            <h2 className="h2 mb-4">Our Team.</h2>
  
            <article className="flow">
  
        <div className="team">
          <ul className="auto-grid" role="list">
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Lavesh Shetty</h2>
                <p>Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Viven Arya</h2>
                <p> Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Pratham Shah</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={pratham} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">saanya Santosh</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={sanya} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Vansh Dhokla</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={vansh} />
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
  