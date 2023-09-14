export const metadata = {
  title: 'Committies',
  description: 'Page description',
}

import Footer from '@/components/ui/footer'
import Zigzag from '@/components/zigzag'
import Link from 'next/link'

import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function SignIn() {
  return (
    <section className="relative">


    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4 ">Our Committies</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-red-600 mb-2">Driving Motivation </div>
                  <h3 className="h3 mb-3">Technical Committies</h3>
                  <p className="text-xl text-gray-400 mb-4">The university aims to offer a medium for the holistic development of students. The students are encouraged to build upon their skills and enhance their capabilities throughout their term.</p>
                 <a href="committees/Technical" className=""><div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
       </a> 
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-red-600 mb-2">Driving Motivation </div>
                  <h3 className="h3 mb-3">Financial Committees</h3>
                  <p className="text-xl text-gray-400 mb-4">Core Intact</p>
                  <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-red-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Social work</h3>
                  <p className="text-xl text-gray-400 mb-4">It is important to give back to society and create a healthy environment for us. The university believes in providing for the underprivileged and those who need help through donations and other activities planned for helping the poor with rations and other facilities.</p>
                  <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
                </div>
              </div>
            </div>

            {/* 4nd item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <div className="font-architects-daughter text-xl text-red-600 mb-2">Driving Motivation </div>
      <h3 className="h3 mb-3">Fine arts </h3>
      <p className="text-xl text-gray-400 mb-4">Core Intact</p>
      <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
    </div>
  </div>
</div>

{/* 3rd item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
    <div className="md:pr-4 lg:pr-12 xl:pr-16">
      <div className="font-architects-daughter text-xl text-red-600 mb-2">More speed. Less spend</div>
      <h3 className="h3 mb-3">Women Empowerment </h3>
      <p className="text-xl text-gray-400 mb-4">It is important to give back to society and create a healthy environment for us. The university believes in providing for the underprivileged and those who need help through donations and other activities planned for helping the poor with rations and other facilities.</p>
      <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
    </div>
  </div>
</div>

{/* 2nd item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <div className="font-architects-daughter text-xl text-red-600 mb-2">Driving Motivation </div>
      <h3 className="h3 mb-3">Research Committees</h3>
      <p className="text-xl text-gray-400 mb-4">Core Intact</p>
      <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
    </div>
  </div>
</div>

{/* 3rd item */}
<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
    <div className="md:pr-4 lg:pr-12 xl:pr-16">
      <div className="font-architects-daughter text-xl text-red-600 mb-2">More speed. Less spend</div>
      <h3 className="h3 mb-3">Editorial And Literature</h3>
      <p className="text-xl text-gray-400 mb-4">It is important to give back to society and create a healthy environment for us. The university believes in providing for the underprivileged and those who need help through donations and other activities planned for helping the poor with rations and other facilities.</p>
      <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
    </div>
  </div>
</div>

<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
  {/* Image */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
  </div>
  {/* Content */}
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
    <div className="md:pl-4 lg:pl-12 xl:pl-16">
      <div className="font-architects-daughter text-xl text-red-600 mb-2">Driving Motivation </div>
      <h3 className="h3 mb-3">Sports</h3>
      <p className="text-xl text-gray-400 mb-4">Core Intact</p>
      <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Click here to know more
        </div> 
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  

    </section>
  )
}
