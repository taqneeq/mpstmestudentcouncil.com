export const metadata = {
    title: 'Voices',
    description: '',
  }
  
  import '../../../../css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import hero from '@/public/images/oldimages/voices.png'
  import '@/app/css/changes.css'
  import '@/app/css/changes.css'


  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20 logo-fix">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Voices</h1>
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
              <p className="text-xl text-gray-400">An initiative by the Lady Representative of the Students’ Council with the aim of providing wings to the women of MPSTME Voices aims to build a community of dedicated women who aspire to be better versions of themselves with every passing day.It is no secret that being an engineering college, the gender ratio is all messed up which has created a vacuum and the need for a platform like Voices was clearly evident. Voices isn’t and will never be restricted to being just a newsletter or a website but will also have various activities like Open Spaces, Breast Cancer Awareness, Self Defence Workshops etc. under its umbrella. Voices will continue to unabashedly remain a women-centric and feminist platform but that doesn’t mean it will remain restricted to just women. For Open Spaces to be truly ‘Open’ we will always have our doors open for all like-minded people. We are of the firm belief that we all must be feminists provided the right definition of feminism. Feminism isn’t about making women strong. Women are already strong. It’s about changing the way the world perceives that strength.</p>
            </div>
            
            
  
          </div>
        </div>
      </section>
  
          </div>
        </div>
        <Footer />
  
      </section>
      
    )
  }
  