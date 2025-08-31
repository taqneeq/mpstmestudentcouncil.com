import Link from 'next/link';
import VideoThumb from '@/public/images/hero.jpg'
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative pt-16 pb-10 md:pt-40 md:pb-16">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="fade-up">
              Students' Council MPSTME
            </h1>
            <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
              Uniting for Positive Change
            </p>
            
            {/* Responsive grid for buttons */}
            <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="400">
              <Link className="btn text-white bg-yellow-500 hover:bg-yellow-600 w-full rounded-md py-3" href="#council-committees">
                Council Committees
              </Link>
              <Link className="btn text-white bg-zinc-700 hover:bg-zinc-600 w-full rounded-md py-3" href="/committees/">
                All Committees
              </Link>
              <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full rounded-md py-3" href="/calendar">
                Latest Events
              </Link>
              <Link className="btn text-white bg-gray-700 hover:bg-gray-600 w-full rounded-md py-3" href="/fests">
                College Fests
              </Link>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Student Council Intro Video"
            video="/videos/intro.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>
      </div>
    </section>
  );
}