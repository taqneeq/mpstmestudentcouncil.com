import Image from 'next/image'

import photo from '@/public/images/council-logo.png'

const teamMembers = [
  {
    name: "Vansh Chheda",
    title: "General Secretary",
    quote: "— Steering the team with vision, unity, and purpose.",
    image: photo,
    linkedin: "https://www.linkedin.com/in/vansh-chheda-560957245/",
  },
  {
    name: "Aryan Bondgulwar",
    title: "Joint General Secretary - Technical",
    quote: "— Engineering innovation, one idea at a time.",
    image: photo,
    linkedin: "https://www.linkedin.com/in/aryan-bondgulwar/",
  },
  {
    name: "Tushita Shetty",
    title: "Joint General Secretary - Editorial & Culture",
    quote: "— Amplifying voices, celebrating stories, shaping culture.",
    image: photo,
    linkedin: "https://www.linkedin.com/in/tushita-shetty/",
  },
  {
    name: "Shreshtha Bindal",
    title: "Joint General Secretary - Contingent Leader",
    quote: "— Leading with spirit, competing with pride.",
    image: photo,
    linkedin: "https://www.linkedin.com/in/shreshthabindal/",
  },
  {
    name: "Aalia Dandawala",
    title: "Joint General Secretary - Sustainable Development Goals",
    quote: "— Driving impact with purpose and sustainability.",
    image: photo,
    linkedin: "https://www.linkedin.com/in/aaliafatema/",
  },
  {
    name: "Yuvanesh Gopinath",
    title: "Joint General Secretary - Alumni",
    quote: "— Bridging legacies, building futures.",
    image: photo,
    linkedin: "https://www.linkedin.com/in/yuvanesh-gopinath/",
  },
  {
    name: "Naman Bhatia",
    title: "Joint General Secretary - Sports",
    quote: "— Fueling passion, fostering team spirit.",
    image: photo,
    linkedin: "https://jkartik.in/",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Team</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col h-full p-6 bg-gray-800 text-center"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <Image
                        className="rounded-full"
                        src={member.image}
                        width={150}
                        height={150}
                        alt={`${member.name} Image`}
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-yellow-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">{member.quote}</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">{member.name}</cite> -{" "}
                    <span className="text-yellow-600 hover:text-gray-200 transition duration-150 ease-in-out">
                      <br />
                      {member.title}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}