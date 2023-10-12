export const metadata = {
    title: 'Editorial BoardMPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/racingteam.jpg'    
  import Flagships from '@/components/flagships'

  import '@/app/css/changes.css'

  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Racing Team</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">Vision - Excellence, elegance, performance and supremacy are synonymous with the Mighty Marlin fish, and that was exactly our inspiration when the team was started.



</p> 
              </div>
            
  
              <Flagships
            events={[
              {
                description:"         GKDC All the research and analysis that goes into the designing and fabrication of vehicles gives unmatched preeminence to the participants as compared to the others. Candidates perform in groups, which prepares them to flourish with Morales. This formulated path enables a student to become a thorough professional with healthy knowledge of Engineering and Management. AIRC Auto India Racing Championship is a GO-KART racing event, where under graduate and graduate students are given opportunity to design and fabricate their four wheeled vehicle. The vehicle must be aerodynamic, highly engineered, safe and ergonomically designed. The design should be commercially viable as a product and should be attractive to the consumers because of its visual appearance, performance, reliability and ease of operation.                " ,
              },
            ]}
/>
            
  
            
  
          </div>
        </div>
      </section>
  
          </div>
        </div>
        <Footer />
  
      </section>
      
    )
  }
  