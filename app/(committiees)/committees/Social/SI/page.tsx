export const metadata = {
  title: "Social Impact ",
  description: "",
};

import "@/app/css/card.css";
import prabir from "../../../../../public/images/prabir.jpeg";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import cult from "@/public/images/Group_Pics/Si.jpeg";
import stock from "@/public/images/logo.png";
import aashir from "@/public/images/core/SI/Aashir.jpeg";
import advit from "@/public/images/core/SI/Advait.jpeg";
import kshama from "@/public/images/core/SI/Kshama_.jpeg";
import anushka from "@/public/images/core/SI/IMG-6516.jpeg";
import "@/app/css/changes.css";
import Flagships from "@/components/flagships";

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Social Impact</h1>
            <p className="text-xl text-gray-400">Social Cell MPSTME </p>
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
                    MPSTME’s Social Impact is a student council committee which
                    preaches the motto ‘’great things are done by a series of
                    small things brought together”. All members of this
                    committee work unitedly towards a single goal, which is to
                    exhaust the resources at hand to extend help to all who need
                    it. The Social Impact, in association with different NGO’s,
                    works tirelessly towards eradication of various issues
                    plaguing the society, like Female Health and Sanitation and
                    Importance of Mental Health. The aim of the committee is to
                    make a significant difference to the lives of people in need
                    by contributing little by little to the cause each day.
                  </p>{" "}
                </div>

                <Flagships
                  events={[
                    {
                      title: "Social Conclave",
                      description:
                        "Backed by the United Nations, Social Conclave is a socio-economic conference in which significant issues are discussed with the goal of bringing about positive changes in various walks of life. Delegates from across the country gather together to discuss the worst kind of social issues plaguing the society, with the unified aim of finding a sustainable solution, which can be implemented on ground level. For expert guidance on such critical issues, eminent speakers attend this conference, who know more about the ground level situations than we do. Social Conclave consists of field visits according to the problem being discussed, to get a better idea and improve the corresponding solutions. The three-day conference also consists of a social mixer, to make delegates interact and feel more comfortable, and a mock panchayat.",
                    },
                    {
                      title: "Beach Clean-up",
                      description:
                        "The Social cell of MPSTME, in association with Divyaj and Bhamla Foundation, supported and actively participated in a Beach Clean-up at Juhu Beach post Ganpati Visarjan, in order to curb the yearly waste and plastics deposited at the beach and in the ocean after Ganpati Visarjan.",
                    },
                    {
                      title: "Health Check-Up Camp",
                      description:
                        "This event was a free health check-up for the teachers, peons, staff, watchmen and so on. Fifteen tests were organized, namely Scalp and Hair Check-Up, Skin Check-Up, Lung Check-Up (Asthma), Nerve Check-Up (Neuropathy), Body Mass Index, Bone Mass Density, Electrocardiogram, General Check-Up, Diabetes Test, Weight Management, Blood Pressure, Eyes Check-Up and Uric Acid. This event was organized as a celebration of Teachers’ Day.",
                    },
                    {
                      title: "Mental Health Matters",
                      description:
                        "An initiative taken up by Social Impact in order to remind each and every one, to give first priority to themselves, and not overlook the rest and recuperation needed by our brain on a daily basis. Two speakers, who were also associated with this cause gave information, advice, and encouragement to the audience on things which can be done to avoid mental health issues, and also how to cope with the issues if they have occurred.",
                    },
                    {
                      title: "Blood Donation Drive",
                      description:
                        "Social Impact, with Mahatma Gandhi Blood Bank, extended this opportunity to all the teachers, staff and students from all SVKM associated colleges to save lives by donating blood. Donors had to undergo a series of tests to be eligible to donate blood, and would receive a Donor Card and Certificate, along with refreshments after donation.",
                    },
                  ]}
                />

                <h2 className="h2 mb-4">Our Team.</h2>

                <article className="flow">
                  <div className="team">
                    <ul className="auto-grid" role="list">
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Aashir Ibrahim</h2>
                          <p>Secretary</p>
                          <Image alt="Prabir Kalwani" src={aashir} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Advit Udyabhanu</h2>
                          <p> Secretary</p>
                          <Image alt="Prabir Kalwani" src={advit} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Yazad BarodiWala</h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={stock} />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Kshama Purohit</h2>
                          <p>Joint Secretary</p>
                          <Image
                            alt="Prabir Kalwani"
                            src={kshama}
                            className="kshama"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" className="profile">
                          <h2 className="profile__name">Anushka Pujari </h2>
                          <p>Joint Secretary</p>
                          <Image alt="Prabir Kalwani" src={anushka} />
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
