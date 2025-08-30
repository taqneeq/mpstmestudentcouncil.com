export const metadata = {
  title: 'Technical Committiees',
  description: '',
}

import Link from 'next/link'
import '../../../css/morecards.css'
import trc from '@/public/images/fests/tq.png'
import ACM from '@/public/images/fests/sattva.jpg'
import IET from '@/public/images/fests/conclave.jpg'
import Image from 'next/image'


export default function Fests() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Technical committees</h1>
          </div>

    </div>
    <div className="box-wrapper">
        <a href="#">
        <div className="box">
        <div className="box-icon"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></div>
        <div className="box-label">Technical committees </div>
        <div className="box-title">Taqneeq</div>
        <div className="box-image">
            <Image src={trc} alt=""/>
        </div>
        </div>
        </a>

        <a href="#">
        <div className="box">
        <div className="box-icon"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></div>
        <div className="box-label">Technical committees</div>
        <div className="box-title">Sattva</div>
        <div className="box-image">
            <Image src={ACM} alt=""/>
        </div>
        </div>
        </a>

        <a href="#">
        <div className="box">
        <div className="box-icon"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></div>
        <div className="box-label">Technical committees</div>
        <div className="box-title">Social Conclave</div>
        <div className="box-image">
        <Image src={IET} alt=""/>
        </div>
        
        </div>
        </a>
  </div>
</div>
</section>

  )
}
