export const metadata = {
    title: 'Enactus',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/enactus.png'
  import '@/app/css/changes.css'
  import Flagships from '@/components/flagships'

  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Enactus</h1>
              <p className="text-xl text-gray-400"></p>
            </div>
  
            {/* Form */}
            <div className="image-wrapper">
          <Image className='image' src={hero} alt="TRC"width={300} height={300} />
          </div>
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">The social entrepreneurship cell A student chapter of a global organisation that is actively working on bringing about significant change and shaping lives in a sustainable manner Our past projects: Zeen and Vishuddh worked intensely to achieve UNSDGs and involved extensive exploration, research and innovation. Currently Enactus Mpstme has 2 ongoing projects - Project Shilpkaar and Project Rupaantar Project Shilpkaar aims to help underprivileged artisans from the handicraft industry to expand their financial potential and empower them. Project Rupaantar was started with the aim of creating something meaningful out of waste and bring in sustainable options for the people of the country.</p>
            </div>
            
            <Flagships
            events={[
              {
                description:"        Dedicated to creating a better world while developing the next generation of Entrepreneurial leaders and social innovators, Enactus is one of the largest experiential learning platforms in the world They establish student programmes on campus to apply business concepts to develop entrepreneurial projects that transform lives and shape a better, more sustainable world. To make a positive impact in the lives of the underprivileged by the ideal of capacity building. To provide its members with a mock corporate journey to gain experience and skills and build contacts for a successful career. Learning and delivery of knowledge and information, analyse and strive to reach the projected figures and attain tangible outcomes such as the income status of our beneficiaries, community upliftment through our ventures. Ultimately, our projects promise long term sustainability by the eventual transfer of its operations to our adopted beneficiaries.                 " ,
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
  