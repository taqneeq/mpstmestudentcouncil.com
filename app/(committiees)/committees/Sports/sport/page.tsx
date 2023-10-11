export const metadata = {
  title: "Tech And Research Cell MPSTME ",
  description: "Page description",
};

import "../../../../css/card.css";
import prabir from "../../../../../public/images/prabir.jpeg";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import hero from "@/public/images/Group_Pics/sports.jpeg";
import sanya from "@/public/images/core/Sports/IMG_6247.jpeg";
import stock from "@/public/images/logo.png";
import Flagships from "@/components/flagships";
import Vansh from '@/public/images/vansh.jpeg';
import Pratham from '@/public/images/pratham.jpeg'
export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Sports Commiittee</h1>
            <p className="text-xl text-gray-400">The Sports Cell Of MPSTME</p>
          </div>

          {/* Form */}
          <Image src={hero} alt="TRC" width={3000} height={3000} />

          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 mb-4">Our Vision.</h2>
                  <p className="text-xl text-gray-400">
                    A team that works together and makes sure that every event
                    is carried out with great enthusiasm and teamwork or as we
                    would like to say, a team that gets tanned together, stays
                    together. We manage all the various sports teams of our
                    college namely Cricket, Basketball, Table Tennis and
                    Football and we make sure we organize amazing events for all
                    the exceptionally talented teams. Events such as College
                    Cricket League, Neymar Jr. Five & College Turf Tournament,
                    Intra College Table Tennis and Carrom Tournament, Gamers
                    Asylum and much more. Alongside organizing events for the
                    students, we also organize events for the faculty and staff.
                    Our motive is to further increase female participation in
                    various events.
                  </p>
                </div>
                <Flagships
                  events={[
                    {
                      title: "Conquer",
                      description:
                        "Annual Sports Festival of MPSTME, spans across 13 days where every day is filled with action-packed face-offs between the best teams across 7 different sports from all around the state competing against each other. The sports are, namely, Athletics, Badminton, Basketball, Cricket, Football, Lawn Tennis, and Table Tennis. Over 1500 participants from all over Mumbai participate in Mumbai’s longest and most competitive sports festival. The fest has also garnered support from various celebrities namely Jonty Rhodes, Remo D’souza, Sonu Sood, etc.",
                    },
                    {
                      title: "Conquest",
                      description:
                        "Annual flagship event of the Sports Committee of MPSTME Mumbai; the ESports Festival bringing together the Gaming Community of India across various platforms. Conquest has seen a diversified global participation of more than 40 universities with over 4000 gamers. Following an immense success in 2020, we geared up to make the second edition of Conquest bigger and better. Conquest 2021 was the second edition of the Students’ Council Sports Committee’s annual esports festival. Conquest 2021 kicked off on 12th December and went on till 22nd December. This year, we included DOTA2, BGMI, FIFA-21, FIFA-22, CS:GO, and Valorant. Among these 6 ESports, we had a total of 5000+ participants. The event was live-streamed on YouTube for all the 11 days on our Youtube channel.",
                    },
                    {
                      title: "Gamers' Asylum",
                      description:
                        "The Students’ Council Sports Committee organizes many editions of GAMERS ASYLUM. It is a 3-day long E-Sports event. The E-sports of the event are CS:GO, COD Mobile, Valorant, BGMI, and Rocket League. The event flow takes place on the Discord app, and the matches are streamed live on YouTube with a viewership of 4000+ viewers across the span of 3 days.",
                    },
                    {
                      title: "College Cricket League",
                      description:
                        "CCL is one of our favorite events of the entire year. Starting off with auctions where the captains and vice-captains of 8 different teams pick their players after trials, followed by 9 action-packed days of cricket matches under the moon. The semi-finals and the finals have always left us biting our nails to find our champion team of the year.",
                    },
                    {
                      title: "Mic’d Up",
                      description:
                        "The Students’ Council Sports Committee started an initiative in 2020 called Mic’d Up. Our main aim was to promote the sporting culture in our college and surrounding colleges via interaction with various sports icons. Here's a few sporting legends we had the immense honor of chatting up with; Wasim Jaffer, Ashwini Ponappa, Rohan Bopanna, Dhruv Barman, Raspreet Sindhu, Ravi Kumar (Olympic Silver Medalist), and Deepak Punia (Olympic Bronze Medalist).",
                    },
                    {
                      title: "Cadence",
                      description:
                        "The Virtual Cyclothon and Marathon.. It was a 3 day long event with many categories for both the cyclothon and the marathon. People not only from Mumbai, but from all over the world took part in the event. With the hashtag of #NewIndiaFitIndia, many people ran and cycled around the globe.",
                    },
                  ]}
                />

                <h2 className="h2 mb-4">Our Team.</h2>

                <article className="flow">
                  <div className="team">
                    <ul className="auto-grid" role="list">
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Lavesh Shetty</h2>
                          <p>Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Viven Arya</h2>
                          <p> Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Pratham Shah</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Pratham} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Saanya Santosh</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={sanya} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Vansh Dhokla</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Vansh} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </section>
  );
}
