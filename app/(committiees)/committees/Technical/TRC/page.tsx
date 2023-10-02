export const metadata = {
  title: "Tech And Research Cell MPSTME ",
  description: "Page description",
};

import "../../../../css/card.css";
import prabir from "@/public/images/prabirkalwani.jpeg";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import hero from "@/public/images/loltrc.jpeg";
import aryan from "@/public/images/core/TRC/IMG_0036.jpeg";
import virati from "@/public/images/core/TRC/IMG_4530.jpeg";
import aayush from "@/public/images/core/TRC/aayush.jpeg";
import darsh from "@/public/images/core/TRC/Darsh .jpeg";
import Flagships from "@/components/flagships";
export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Tech And Reserch Cell</h1>
            <p className="text-xl text-gray-400">
              The Technical Cell Of MPSTME
            </p>
          </div>

          {/* Form */}
<<<<<<< Updated upstream
          <Image src={hero} alt="TRC" width={3000} height={3000} />

          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 mb-4">Our Vision.</h2>
                  <p className="text-xl text-gray-400">
                    Our vision is to foster a vibrant and inclusive campus
                    community where every student feels empowered, engaged, and
                    supported. We strive to be the voice of the student body,
                    advocating for their needs and aspirations. Our aim is to
                    create meaningful opportunities for personal and academic
                    growth, while promoting a strong sense of belonging and
                    unity among students from diverse backgrounds. Through
                    collaboration, leadership development, and innovative
                    initiatives, we aim to enhance the overall student
                    experience and contribute to the holistic development of
                    each individual. Together, let's build a brighter future for
                    all students at our college!
                  </p>
                </div>
=======
          <div className="flex justify-center items-center">
          <Image src={hero} alt="TRC" className="max-w-[1000px] w-full" />
          </div>
        <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
>>>>>>> Stashed changes

                <Flagships
                  events={[
                    {
                      title: "Taqneeq",
                      description:
                        "MPSTME’s annual Technical Festival, Taqneeq, is a 3-Day tech extravaganza; an amalgamation of all domains of engineering, supplemented with numerous informative seminars and an array of technical events as well as informal games. Over the previous editions of Taqneeq, we have partnered with Tech Mahindra, E&Y, Colors Infinity, Mama Earth, and many more notable companies in the industry. Taqneeq allows students to redefine the way they perceive technology and its adaptations.",
                    },
                    {
                      title: "The Talk",
                      description:
                        "MPSTME’s annual Technical Festival, Taqneeq, is a 3-Day tech extravaganza; an amalgamation of all domains of engineering, supplemented with numerous informative seminars and an array of technical events as well as informal games. Over the previous editions of Taqneeq, we have partnered with Tech Mahindra, E&Y, Colors Infinity, Mama Earth, and many more notable companies in the industry. Taqneeq allows students to redefine the way they perceive technology and its adaptations.",
                    },
                    {
                      title: "Internship Fair",
                      description:
                        "The Internship Fair aims to help students build real-world industry contacts and gauge the market consensus. Throughout the years, hundreds of students have bagged valuable internships with reputed companies of different domains. The Internship Fair has collaborated with L&T, Bank of India, Kenmark Solutions, AIESEC, and many more.",
                    },
                    {
                      title: "Cyber Cypher",
                      description:
                        "Cyber Cypher, a 24-hour hackathon with a prize pool of Rs. 50,000, aims to test participant’s programming skills via two levels of problem statements, Elementary Level, using fundamentals of programming and Advanced Level, using knowledge of data science and artificial intelligence. In its first edition, Cyber Cypher welcomed a stellar panel of Chief Guests from DCB Bank, Reliance Securities and CoinDCX; as well as judges from Facebook, Google, Accenture and many more!",
                    },
                    {
                      title: "Nuiscience",
                      description:
                        "Nuiscience is a fun event based on fundamental concepts of science. With games such as Buzz Wire, Elemenate, Catapult and an ML based Rock Paper Scissors Model, this event showcases our message that this committee is not just about coding, but also the perfect way to implement your knowledge into reality.",
                    },
                    {
                      title: "Workshops",
                      description:
                        "Tech Comm has organized a diverse set of workshops over the years, covering various fields such as aviation cloud computing, cybersecurity and many more. By holding practical workshops such as the PC - Building workshop, we hope to give the students a hands-on experience of learning different aspects of technology.",
                    },
                  ]}
                />

<<<<<<< Updated upstream
                <h2 className="h2 mb-4">Our Team.</h2>
=======
          <article className="flow">

      <div className="team">
        <ul className="auto-grid" role="list">
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Aryan Bondgulwar</h2>
              <p>Secretary</p>
              <Image alt="Prabir Kalwani" src={aryan} />
            </a>
          </li>
          <li>
            <a href="https://prabir.in" target="_blank" className="profile">
              <h2 className="profile__name">Prabir Kalwani</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={prabir} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Virati Chordiya</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={virati} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Aayush Shah</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={aayush} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="profile">
              <h2 className="profile__name">Darsh Doshi</h2>
              <p>Joint Secretary</p>
              <Image alt="Prabir Kalwani" src={darsh} />
            </a>
          </li>
          
          
        </ul>
      </div>
    </article>
    <div className="spacing pt-[5rem]"></div>
  
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Flagship Events</h2>
            <p className="text-xl text-gray-400">Taqneeq
MPSTME’s annual Technical Festival, Taqneeq, is a 3-Day tech extravaganza; an amalgamation of all domains of engineering, supplemented with numerous informative seminars and an array of technical events as well as informal games. Over the previous editions of Taqneeq, we have partnered with Tech Mahindra, E&Y, Colors Infinity, Mama Earth, and many more notable companies in the industry. Taqneeq allows students to redefine the way they perceive technology and its adaptions.
<br/>
The Talk
MPSTME’s annual Technical Festival, Taqneeq, is a 3-Day tech extravaganza; an amalgamation of all domains of engineering, supplemented with numerous informative seminars and an array of technical events as well as informal games. Over the previous editions of Taqneeq, we have partnered with Tech Mahindra, E&Y, Colors Infinity, Mama Earth, and many more notable companies in the industry. Taqneeq allows students to redefine the way they perceive technology and its adaptions.
<br/>

Internship Fair
The Internship Fair aims to help students build real world industry contacts and gauge the market consensus. Throughout the years, hundreds of students have bagged valuable internships with reputed companies of different domains. The Internship Fair has collaborated with L&T, Bank of India, Kenmark Solutions, AIESEC, and many more.
<br/>

Cyber Cypher
Cyber Cypher, a 24-hour hackathon with a prize pool of Rs. 50,000, aims to test participant’s programming skills via two levels of problem statements, Elementary Level, using fundamentals of programming and Advanced Level, using knowledge of data science and artificial intelligence. In its first edition, Cyber Cypher welcomed a stellar panel of Chief Guests from DCB Bank, Reliance Securities and CoinDCX; as well as judges from Facebook, Google, Accenture and many more!
<br/>

Nuiscience
Nuiscience is a fun event based on fundamental concepts of science. With games such as Buzz Wire, Elemenate, Catapult and an ML based Rock Paper Scissors Model, this event showcases our message that this committee is not just about coding, but also the perfect way to implement your knowledge into reality.
<br/>

Workshops
Tech Comm has organized a diverse set of workshops over the years, covering various fields such as aviation cloud computing, cybersecurity and many more. By holding practical workshops such as the PC - Building workshop, we hope to give the students a hands-on experience of learning different aspects of technology.
</p>
          </div>
          

          

        </div>
      </div>
    </section>
>>>>>>> Stashed changes

                <article className="flow">
                  <div className="team">
                    <ul className="auto-grid" role="list">
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Aryan Bondgulwar</h2>
                          <p>Secretary</p>
                          <Image alt="Prabir Kalwani" src={aryan} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://prabir.in"
                          target="_blank"
                          className="profile"
                        >
                          <h2 className="profile__name">Prabir Kalwani</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={prabir} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Virati Chordiya</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={virati} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Aayush Shah</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={aayush} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Darsh Doshi</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={darsh} />
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
