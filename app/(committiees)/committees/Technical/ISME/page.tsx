export const metadata = {
    title: 'ISME MPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/ISME Logo.jpeg'    
  import Flagships from '@/components/flagships'  
  import '@/app/css/changes.css'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">ISME</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">The primary goal of ISME is to enhance knowledge in manufacturing engineering and management. It provides tactics and techniques for applying that knowledge in the real world, prominently in learning environments across the nation. It enables a media of communication for associated institutions and communities, both domestically and overseas. ISME seeks to bring together individuals, institutions and Govt. Agencies to improve engineering practices in India. Our purpose is to spark people’s curiosity by highlighting both the hardware and software aspects of technology.

</p> 
              </div>
            
  
  
              <Flagships
            events={[
              {
                description:"        The committees’ purpose is to help college students become more technically adept. It seeks to create a crucial link between what is taught in the college and how it is applied in the real world. ISME also provides a great learning platform through various competitions and especially through its flagship event. " ,
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
  