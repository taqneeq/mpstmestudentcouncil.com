export const metadata = {
    title: 'Editorial BoardMPSTME ',
    description: 'Page description',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/4c.png'    
  import Flagships from '@/components/flagships'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">4c</h1>
            </div>
  
            {/* Form */}
          <Image src={hero} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">We at 4C - The Marketing Cell of MPSTME, under the NMIMS Deemed-to-be-University embarked on this journey back in 2008, with one collective vision in our minds - To Collect, Connect, Commence, and Contest in the rapidly evolving Marketing world, as depicted in our name. As a committee,we organize marketing-related events that are a perfectly proportionate mix of fun and learning. In addition to this, we regularly conduct seminars and industry workshops which help in providing hands-on knowledge to the students that assist them in honing their practical skills and nurturing their marketing mindset.</p> 
              </div>
            
              <Flagships
                  events={[
                    {
                      description: "Wings and Roots , Euphoria and Gensis",

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
  