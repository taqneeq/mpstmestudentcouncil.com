export const metadata = {
<<<<<<< HEAD
  title: "Cultural ",
  description: "",
};

import "@/app/css/card.css";
import prabir from "../../../../../public/images/prabir.jpeg";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import cult from "@/public/images/features-03-image-01.png";
import stock from "@/public/images/logo.png";
import Tushita from "@/public/images/core/Cult/Tushita Shetty.jpeg";
import Arpit from "@/public/images/core/Cult/BDCB2C25-02B3-47DE-A613-9810C2F2F1C8.jpeg";
import Ishwari from "@/public/images/core/Cult/IMG_1597.jpeg";
import Flagships from "@/components/flagships";

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Cultural Committie </h1>
            <p className="text-xl text-gray-400">Cultural Cell MPSTME </p>
          </div>

          {/* Form */}
          <Image src={cult} alt="TRC" width={3000} height={3000} />

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
                      title: "Cultural Night",
                      description:
                        "One of the most anticipated nights of the entire college year, it’s the chance for all students to let loose and have some fun to the DJ’s tunes along with beautiful performances from the talent teams of our college, dance, music & drama. The event is held on large grounds or an event hall with a professional music & DJ production setup, food being served. Students attend this event clad in their best traditional outfits to dance to all kinds of music and have lots of fun.",
                    },
                    {
                      title: "Carnival",
                      description:
                        "Carnival is a very eagerly awaited day for all our students, it’s a whole day of fun-filled activities, games, short events during the day with food stalls and activity stalls during the day. After a successful day, in the evening to relax we host The Comedy Night where we have celebrated comedians performing for our students to give them a good laugh and a well-deserved break from our stressful everyday lives.",
                    },
                    {
                      title: "Rose & Chocolate Day",
                      description:
                        "One of the most exciting events held in our college for all our students, it is a day where all students may come to the college lounge, write a letter to their dear friends and purchase cupcakes, chocolates & variety of coloured roses for them, Cultural Committee then discretely delivers the gifts and letters to the intended receiver anonymously if sender wishes to remain so. Lots of students look forward to this event all ‘round the year!",
                    },
                    {
                      title: "World Peace Day",
                      description:
                        "One of Cultural Committee’s most popular events, on World Peace Day, we host talent competitions across various fields for all students based on the theme of “peace”, encouraging all our fellow peers to achieve their inner peace via art, dance, music, theatrical performances etc., and motivating them by awarding the best with various valuable prizes.",
                    },
                    {
                      title: "Engineer’s Day",
                      description:
                        "The Cultural Committee, being a part the MPSTME Student Council, gives back to the Engineering Community by holding a social media campaign in honour of reputable engineers on this auspicious day.",
                    },
                    {
                      title: "Secret Santa",
                      description:
                        "The Cultural Committee hosts a Secret Santa in honour of the Christmas Spirit every year for the entire Student Council, where each member anonymously gifts another member of the council something precious & meaningful in front of a beautifully decorated Christmas Tree in the College Lounge.",
                    },
                    {
                      title: "The Friendship Booth",
                      description:
                        "Cultural Committee sets up an environment for students to meet new people and create new friendships whether it's online or offline. Each student gets to explore several new friendships with various other people, making it the best socialising event for all students, especially new ones.",
                    },
                    {
                      title: "Traditional Day",
                      description:
                        "Another one of the most celebrated events of the institution, on this day every student dresses up in their most beautiful salwar kameez, kurta, lehenga & other traditional outfits and enjoys a fun-filled day of taking beautiful photos at our professional photobooth, buying various accessories, clothes, food, makeup at the stalls setup by us on campus in our beautifully decorated canopy area.",
                    },
                    {
                      title: "Recess",
                      description:
                        "A well-known event among all our students, Recess is one of our signature events with a day full of exhilarating games and activities like Dare Pong, The Friendship Booth, carrom, and other popular board games.",
                    },
                    {
                      title: "Teachers’ Day",
                      description:
                        "On Teachers’ Day, The Cultural Committee honours all our teachers & faculty by gifting them various trinkets & meaningful items like calendars, diaries, candles, plantable pens, chocolates, etc. At the end of the day after all scheduled lectures are done, we host the official event with a speech of gratitude & dance, music, drama performances in honour of the teachers. We also hand out boxes of food for all teachers whilst they are enjoying the event.",
                    },
                  ]}
                />

                <h2 className="h2 mb-4">Our Team.</h2>

                <article className="flow">
                  <div className="team">
                    <ul className="auto-grid" role="list">
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Aayush Mhamunkar</h2>
                          <p>Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Shekhar Ojha</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Tushita Shetty</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Tushita} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Ishwari Birje</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Ishwari} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Amrit Bhatia </h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={Arpit} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Krish Shah</h2>
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
=======
    title: 'Cultural ',
    description: '',
  }
  
  import '@/app/css/card.css'
  import prabir from '../../../../../public/images/prabir.jpeg'
  import Link from 'next/link'
  import Image from 'next/image'
  import Footer from '@/components/ui/footer'
  import cult from '@/public/images/features-03-image-01.png'
  import stock from '@/public/images/logo.png'
  import Tushita from '@/public/images/core/Cult/Tushita Shetty.jpeg'
  import Arpit from  '@/public/images/core/Cult/BDCB2C25-02B3-47DE-A613-9810C2F2F1C8.jpeg'
  import Ishwari from '@/public/images/core/Cult/IMG_1597.jpeg'
  
  export default function ResetPassword() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Cultural Committiee</h1>
              <p className="text-xl text-gray-400">Cultural Cell MPSTME </p>
            </div>
  
            {/* Form */}
          <Image src={cult} alt="TRC"width={3000} height={3000} />
  
          <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Our Vision.</h2>
              <p className="text-xl text-gray-400">When it comes to talking numbers and matters of money, nobody does it better than us. Colloquium, The Business and Management Cell of the Students’ Council, aims towards collaborating with the corporate world while acclimating the team to enter the professional arena. Partnering with the biggest of banks, brands and tech giants like OnePlus, ICICI Bank, Starbucks, Axis Bank, NSDL, LinkedIn, Snapchat and Ebay are just specks in a plethora of achievements we boast here at Colloquium. We believe in the ethos of “If work isn’t fun, you’re not playing on the right team”. Helping students become more confident, knowledgeable and marketable, and providing them with opportunities to create long-lasting relationships with like-minded individuals has always been at the top of our list.</p>            </div>
            
            <h2 className="h2 mb-4">Our Team.</h2>
  
            <article className="flow">
  
        <div className="team">
          <ul className="auto-grid" role="list">
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Aayush Mamunkar</h2>
                <p>Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Shekhar Ojha</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Tushita Shetty</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={Tushita} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Ishwari Birje</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={Ishwari} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Arpit Bhalla</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={Arpit} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="profile">
                <h2 className="profile__name">Krish Shah</h2>
                <p>Joint Secretary</p>
                <Image alt="Prabir Kalwani" src={stock} />
              </a>
            </li>
            
          </ul>
>>>>>>> parent of e1e1f69 (fixed issue on mobile devices)
        </div>
      </div>
      <Footer />
    </section>
  );
}
