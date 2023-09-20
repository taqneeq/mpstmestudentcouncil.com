export const metadata = {
  title: "Editorial BoardMPSTME ",
  description: "Page description",
};

import "../../../../css/card.css";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import group from "@/public/images/Group_Pics/edbcore.jpeg";
import shivani from "@/public/images/core/EDB/SHIVANI SINGH_EDB.jpeg";
import stock from "@/public/images/logo.png";
import neel from "@/public/images/core/EDB/IMG_9737.jpeg";
import Jayesh from "@/public/images/core/EDB/DSC_0700.jpeg";
import Dhristi from "@/public/images/core/EDB/IMG_5978.jpeg";
import Rafa from "@/public/images/core/EDB/RafaInamdar_edb.jpeg";
import Flagships from "@/components/flagships";

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Editorial Board </h1>
            <p className="text-xl text-gray-400">
              The Editorial Cell Of MPSTME
            </p>
          </div>

          {/* Form */}
          <Image src={group} alt="TRC" width={3000} height={3000} />

          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 mb-4">Our Vision.</h2>
                  <p className="text-xl text-gray-400">
                    The Editorial Board of Student Council MPSTME aims to
                    cultivate creativity and aims to bring together all those
                    who are interested in literature, art, music, debates and
                    pop culture alike. The board explores the shared elements of
                    music and visual arts and plans to organize several events
                    and activities relating to the same. Being one of the oldest
                    committees the Editorial Board’s agenda comprises the Open
                    Mic Night, Campaigns, Comic-Con, The Editorial Project and
                    many more events, bringing together many celebrated artists,
                    renowned authors and creators to inspire the generation’s
                    enthusiastic young minds and encourage expressiveness. We
                    strive to be the medium where literature fanatics, pop
                    culture lovers, and fine art enthusiasts can come together
                    to express their views and voice their opinions. Editorial
                    Board aims to establish a platform with a community of
                    people with kaleidoscopic tastes and interests. We leave no
                    page unturned and no words left unsaid.
                  </p>
                </div>

                <Flagships
                  events={[
                    {
                      title: "The Editorial Project (TEP)",
                      description:
                        "TEP is the Literary fest of NMIMS’ MPSTME and the Editorial board's flagship event, an event for everyone who loves immersing themselves into a lively, bookish trance. TEP has featured many celebrities such as The Local Train, and it gave us an evening to remember.",
                    },
                    {
                      title: "Comic Con",
                      description:
                        "Comic Con is one of the flagship events of The Editorial Board. It is a convention that focuses predominantly on comic book culture and other forms of pop culture entertainment, including movies, TV shows, and video games. Enthusiasts gather to meet each other along with exciting games to play and merchandise to collect!",
                    },
                    {
                      title: "Open Mic Night",
                      description:
                        "Open mic night is a night of creativity and self-expression. Whether you're a musician, poet, comedian, or just have something to say, we welcome all forms of artistic expression. The Editorial board creates a platform to share your talent with our supportive and engaged audience—a platform where your voice can be heard.",
                    },
                    {
                      title: "Blind Date with a Book",
                      description:
                        "One of Editorial board's traditional events, Blind Date with a Book is a pop-up library that promotes leisure reading and aims to pair a reader with their perfect book. We collect popular titles of various genres, which are hand-wrapped to conceal the title and the author.",
                    },
                    {
                      title: "Verve",
                      description:
                        "VERVE ’21 was an edition of MPSTME’s official magazine, which paid tribute to the city we love. Taking us on a beautiful rhythmic journey from Bombay to मुंबई. Verve had successfully crossed more than 100k reads.",
                    },
                    {
                      title: "Kalam se Kranti",
                      description:
                        "The Editorial Board hosted an article writing competition 'कलाम se क्रांति' as a part of the Azadi Ka Amrut Mahotsav. This was to celebrate India's 75 years of Independence, the 'Azadi Ka Amrut Mahotsav' started 75 weeks prior to the Independence Day. Articles were to be written on 'India's 75 years of Independence' and were mailed to us by the participants.",
                    },
                    {
                      title: "Intra Crossfire Debate",
                      description:
                        "The Students’ Council Editorial Board organizes an annual debate competition and an event that disciplines across the college. The days of Crossfire Debate were exemplary in the fact that ideas were exchanged over healthy argument, and the spirit of civil, rational dissent in a democracy is prized over all.",
                    },
                  ]}
                />

                <h2 className="h2 mb-4">Our Team.</h2>

                <article className="flow">
                  <div className="team">
                    <ul className="auto-grid" role="list">
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Shivani Singh</h2>
                          <p> Secretary</p>
                          <Image alt="Prabir Kalwani" src={shivani} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Rafa Inamdar</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Rafa} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Neil </h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={neel} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Jayesh </h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Jayesh} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Dhristi Palresha</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Dhristi} />
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
