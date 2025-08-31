import { committeesData } from '@/lib/committeesData';
import Image from 'next/image';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import '../../public/overall.css';

const councilCategory = committeesData.find((cat) => cat.name === 'Council');

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <section>
        <div id="council-committees" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Committees</h2>
              <p className="text-xl text-gray-400">A vast range of committees offer broader horizons</p>
            </div>

            {/* Committee Grid */}
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
              {councilCategory?.committees.map((committee) => {
                // Create image path by formatting committee name
                const formattedName = committee.name.toLowerCase().split(' ')[0];
                const imagePath = `/images/committees/council/${formattedName}/logo.png`;

                return (
                  <div
                    key={committee.name}
                    className="flex flex-col h-full p-6 bg-gray-800 text-center"
                    data-aos="fade-up"
                  >
                    <a href={`/committees/Council/${formattedName}`}>
                      <div className="relative inline-flex flex-col mb-4 items-center">
                        <Image
                          className="rounded-full logo-image"
                          src={imagePath}
                          width={150}
                          height={150}
                          alt={`${committee.name} Logo`}
                        />
                      </div>
                      <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                        <cite className="text-gray-200 not-italic">{committee.name}</cite>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
