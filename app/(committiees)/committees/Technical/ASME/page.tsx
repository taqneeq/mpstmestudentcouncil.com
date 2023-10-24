export const metadata = {
    title: 'ASME MPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/asme.jpg'    
  import Flagships from '@/components/flagships'
  import '@/app/css/changes.css'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">ASME</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400"> ands-on experience to all Mechanical Engineering students as well as other branches Exposure to current scenarios and opportunities in the Mechanical field Enhance the skill set of our fellow peers



</p> 
              </div>


              <Flagships
            events={[
              {
                description:"              Events which are feasible and efficient on the online platform, which will help students to enhance their skill set. Provide a platform to those interested in E-fest ASME. Give insights on placement drives and it’s various aspects." ,
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
  