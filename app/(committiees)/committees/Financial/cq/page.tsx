export const metadata = {
  title: "CQ",
  description: "",
};

import "../../../../css/card.css";
import prabir from "../../../../../public/images/prabir.jpeg";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import CQ from "@/public/images/Group_Pics/cq.jpeg";
import stock from "@/public/images/logo.png";
import survey from "@/public/images/core/CQ/Surve.jpeg";
import manan from "@/public/images/core/CQ/IMG_4718.jpeg";
import tanna from "@/public/images/core/CQ/Shubham Tanna.jpeg";
import Flagships from "@/components/flagships";

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            <h1 className="h1 mb-4">Colloqium</h1>
            <p className="text-xl text-gray-400">Buisness Cell MPSTME </p>
          </div>

          {/* Form */}
          <Image src={CQ} alt="TRC" width={3000} height={3000} />

          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 mb-4">Our Vision.</h2>
                  <p className="text-xl text-gray-400">
                    When it comes to talking numbers and matters of money,
                    nobody does it better than us. Colloquium, The Business and
                    Management Cell of the Students’ Council, aims towards
                    collaborating with the corporate world while acclimating the
                    team to enter the professional arena. Partnering with the
                    biggest of banks, brands and tech giants like OnePlus, ICICI
                    Bank, Starbucks, Axis Bank, NSDL, LinkedIn, Snapchat and
                    Ebay are just specks in a plethora of achievements we boast
                    here at Colloquium. We believe in the ethos of “If work
                    isn’t fun, you’re not playing on the right team”. Helping
                    students become more confident, knowledgeable and
                    marketable, and providing them with opportunities to create
                    long-lasting relationships with like-minded individuals has
                    always been at the top of our list.
                  </p>{" "}
                </div>

                <Flagships
                  events={[
                    {
                      title: "Stockraze",
                      description:
                        "Learning how to trade on the stock market or brushing up on your Warren Buffet-like investing skills, Stockraze is a pseudo stock market simulation which gives young participants a platform to gain exposure about the financial markets and investing with a competitive curve. As an introduction to Stockraze 5.0, we set in the excitement with a pre-event inspired by the Wolf of Wall Street. Stockraze has partnered with the likes of ICICI Lombard, Axis Bank and NSDL in previous editions.",
                    },
                    {
                      title: "Bizzneeti",
                      description:
                        "Bizzneeti is a National Level Business Planning Competition. It is listed among the top ten of its kind in India. Bizzneeti seeks to provide budding entrepreneurs a chance to showcase their business savvy and startup ideas to a panel of angel investors with the opportunity to battle it out to see whether their ideas have got what it takes to sustain in the real world.",
                    },
                    {
                      title: "LinkedIn Workshop",
                      description:
                        "An official workshop in collaboration with LinkedIn India. It reverberates the importance of professional networking and setting an online presence in a digital space for future headhunters and recruitments. Last year's workshop was the grandest one yet, graced by the presence of our speaker Mr. Aman Dhattarwal.",
                    },
                    {
                      title: "BizzBuzz",
                      description:
                        "Colloquium was the first student body in the college to explore augmented reality by releasing the BizzBuzz filter on Instagram. It provided a fun way to learn and correlate common business terms used with a creative touch.",
                    },
                    {
                      title: "Snapchat Lens Studio Workshop",
                      description:
                        "Powered by Snapchat India, the Lens Studio Workshop focused on how big brands can use the platform and tools like geofilters to boost their brand image.",
                    },
                    {
                      title: "CQ Day",
                      description:
                        "CQ day is an action-packed commemoration of the ethos of Colloquium hosting 4-5 walk-in-events related to our genre for students to come, chill and have fun with their friends. These mini games, like Andhadhun, Saanp Seedhi and Football Stock Exchange, are generally played individually or even in teams, at the end of which winners receive exciting prizes.",
                    },
                  ]}
                />

                <h2 className="h2 mb-4">Our Team.</h2>

                <article className="flow">
                  <div className="team">
                    <ul className="auto-grid" role="list">
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Adhya</h2>
                          <p>Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Soham Surve</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={survey} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Manan Siroya</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={manan} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Shubham Tanna</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={tanna} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Sarah Noorani</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            </section>

         
            <Footer />
            </div>
            </div>
            </section>
      
  );
}
