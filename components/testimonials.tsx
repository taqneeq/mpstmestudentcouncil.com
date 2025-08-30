import Image from 'next/image'
import GeneralTest from '@/public/images/testimonial-00.jpg'
import soham from '@/public/images/council-logo.png'
import tanya from '@/public/images/council-logo.png'
import nidhi from '@/public/images/council-logo.png'
import parth from '@/public/images/council-logo.png'
import renesh from '@/public/images/council-logo.png'
export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Team</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

          <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
          <a href="https://www.linkedin.com/in/tanya-kulkarni-b5501b204">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={tanya} width={150} height={150} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Leading with Vision, Inspiring with Action.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Tanya Kulkarni </cite> - <a     className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"><br/>General Secretary </a>
              
              </div>
              </a>
            </div>



            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up" data-aos-delay="200">
            <a href="https://www.linkedin.com/in/nidhikeni">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={nidhi} width={150} height={150} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Built on dreams, fueled by determination, crowned with victory</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Nidhi Keni </cite> - <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"><br/>Lady Represenatative</a>
              </div>
              </a>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up" data-aos-delay="200">
            <a href="https://www.linkedin.com/in/renesh-gandhi-27b4b3207">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={renesh} width={150} height={150} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Together, we'll shape an inspiring future, fostering growth and positive change.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Renesh Gandhi </cite> - <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"><br/>Logistics Joint General Secretary</a>
              </div>
              </a>
            </div>

            
          
            {/* 1st testimonial */}
            


            

            {/* 2nd testimonial */}
            



            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up">
            <a href="https://www.linkedin.com/in/parth-t-8a0083164">

              <div>
                <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={parth} width={150} height={150} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— The future is bright, filled with innovation and unity. </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Parth Tendulkar </cite> - <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"><br/> Editorial & PR <br/>Joint General Secretary </a>
              </div>
              </a>
            </div>


            {/* 3rd testimonial */}


            <div className="flex flex-col h-full p-6 bg-gray-800 text-center" data-aos="fade-up" data-aos-delay="400">
            <a href="https://www.linkedin.com/in/soham-misra13">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={soham} width={150} height={100} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Crafting a lasting legacy, not just a momentary impact </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Soham Misra </cite> - <a className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"><br/>Technical Joint General Secretary</a>
              </div>
              </a>
            </div>

          

          </div>

        </div>
      </div>
    </section>
  )
}