import Link from "next/link";
import VideoThumb from "@/public/images/hero.jpg";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative pt-16 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* Latest Events bubble */}
            <Link
              href="/calendar"
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Latest Events
            </Link>

            {/* Heading */}
            <h1
              className="text-5xl  font-extrabold leading-tighter tracking-tighter mb-4 text-white"
              data-aos="fade-up"
            >
              Students' Council MPSTME
            </h1>
            <p
              className="text-xl text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Uniting for Positive Change
            </p>

            {/* Buttons grid */}
            <div
              className="max-w-md mx-auto grid grid-cols-3 gap-4 *:p-2 *:rounded"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                className="flex items-center justify-center   text-white bg-yellow-500 hover:bg-yellow-600 transition"
                href="#council-committees"
              >
                Council Committees
              </Link>
              <Link
                className="flex items-center justify-center  text-white bg-zinc-700 hover:bg-zinc-600 transition"
                href="/committees/"
              >
                All Committees
              </Link>
              <Link
                className="flex items-center justify-center   text-white bg-gray-700 hover:bg-gray-600 transition"
                href="/fests"
              >
                College Fests
              </Link>
            </div>
          </div>

          {/* Video */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Student Council Intro Video"
            video="/videos/intro.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
