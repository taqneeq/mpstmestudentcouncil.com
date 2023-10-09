export const metadata = {
  title:  'NMIMS MPSTME Student Council ',
  description: 'The Amazing Council Of NMIMS MPSTME',
}
import Image from 'next/image'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import GeneralTest from '@/public/images/testimonial-00.jpg'
import TRC from '@/public/images/trc.png'
import SI from '@/public/images/oldimages/si.png'
import eb from '@/public/images/oldimages/edboard.png'
import sports from '@/public/images/oldimages/sport.png'
import cultural from '@/public/images/oldimages/cul.png'
import cq from '@/public/images/oldimages/cq.png'

import '../../public/overall.css'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Committees</h2>
            <p className="text-xl text-gray-400">A vast range of committees offer broader horizons </p>
          </div>
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
              <div className='alignment'>
                <div className="relative inline-flex flex-col mb-4">
                <div className="spacing-1"></div>
                <a href="/committees/FineArts/cq">
                <Image className="rounded-full logo-image" src={cq} width={150} height={150} alt="Testimonial 02" />
               </a>
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic"> Colloquium  </cite>  <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
              <div className='alignment'>
                <div className="relative inline-flex flex-col mb-4">
                <div className="spacing-1"></div>
                <a href="/committees/FineArts/cultural">
                <Image className="rounded-full logo-image" src={cultural} width={150} height={150} alt="Testimonial 02" />
                  </a>
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Cultural committee </cite>  <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>
            
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
              <div className='alignment-edb'>
                <div className="relative inline-flex flex-col mb-4">
                <a href="/committees/Editorial/edb">
                <Image className="rounded-full logo-image" src={eb} width={150} height={150} alt="Testimonial 02" />
                  </a>
                </div>
              </div>

              
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Editorial Board</cite>  <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
              <div className='alignment-si'>
                <div className="relative inline-flex flex-col mb-4">
                <a href="/committees/Social/SI">
                <Image className="rounded-full logo-image" src={SI} width={200} height={200} alt="Testimonial 02" />
             </a>
              </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Social Impact </cite>  <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>
     
            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
              <div className='alignment-sports'>
                <div className="relative inline-flex flex-col mb-4">
                <div className="spacing-1"></div>
                <a href="/committees/Sports/sport">
                <Image className="rounded-full logo-image" src={sports} width={150} height={150} alt="Testimonial 02" />
            </a>
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Sports committee </cite>  <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>
            


            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
              <div className='alignment-trc'>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="spacing"></div>
                  <a href="/committees/Technical/TRC">
                <Image className="rounded-full logo-image" src={TRC} width={100} height={100} alt="Testimonial 02" />
                </a>
                </div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Tech And Research Cell </cite>  <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>









      <Testimonials />
      <Newsletter />
    </>
  )
}
