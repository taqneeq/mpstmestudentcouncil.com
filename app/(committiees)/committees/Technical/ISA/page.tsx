export const metadata = {
    title: 'Editorial BoardMPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/isa.png'    
  import Flagships from '@/components/flagships'
  import '@/app/css/changes.css'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">ISA</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400"> The International Society of Automation (ISA) is a non-profit professional association of engineers, technicians, and management engaged in industrial automation. As the globally trusted provider of foundational standards-based technical resources for the profession, ISA strives to build a better world through automation. At the MPSTME student's section of ISA we work tirelessly to achieve this goal through the various events and projects that we conduct throughout the year.

</p> 
              </div>
            
  
              <Flagships
            events={[
              {
                description:"    U’Lectro is a national level Inter-College Technical Project Display Competition. It is the flagship event of our committee. Students from the IIT and other reputable universities attend this event to take part. Numerous eminent professors and members of the faculty are also invited to judge the competition. In addition to the main event, IETE hosts interactive sessions. The college becomes a magnet for tech enthusiasts and aspiring engineers thanks to IETE-SF MPSTME. " ,
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
  