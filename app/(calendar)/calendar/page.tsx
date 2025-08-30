export const metadata = {
  title: 'Committees',
  description: 'The various committees of MPSTME',
}

import '@/app/css/event.css'

// Event data JSON
const events = [
  {
    year: "October 2023",
    date: "October 12",
    title: "Industrial Visit By IETE-SF",
  },
  {
    date: "October 13",
    title: "Cultural Night By Cultural Committee",
  },
  {
    date: "October 16",
    title: "Event By IEC",
  },
  {
    date: "October 17",
    title: "Event By ACM/IEC",
  },
  {
    date: "October 18/19",
    title: "Blood Donation Drive By Social Impact",
  },
  {
    date: "October 20",
    title: "Karl's Terzaghi Memorial Day Expert Lecture By CESA",
  },
  {
    date: "October 21",
    title: "Google Cloud Campaign By GDSC",
  },
  {
    date: "October 21/22",
    title: "BOTSON8.0 By IET",
  },
  {
    date: "October 23",
    title: "Literary Workshop By Edboard",
  },
  {
    date: "October 25/26",
    title: "Blind Date With A Book By Edboard",
  },
  {
    date: "October 27",
    title: "Mental Health Day By Social Impact",
  },
  {
    date: "October 28",
    title: "Forging Your Way 2.0 By ASME",
  },
  {
    date: "October 31",
    title: "Rahasya By Edboard",
  },
  {
    date: "October 31",
    title: "Emporia By 4c",
  },
  {
    year: "November 2023",
    date: "November 2",
    title: "Industry Expert Talk Session By Findrome",
  },
  {
    date: "November 3",
    title: "Google Cloud Campaign By GDSC",
  },
  {
    date: "November 3/4/5",
    title: "Mumbai MUN By MunSociety MPSTME",
    link: "https://mumbaimun.com"
  }
]

export default function EventCalendar() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Event Calendar
      </h1>

      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index}>
            {event.year && (
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                {event.year}
              </h2>
            )}

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-yellow-500 text-black font-bold px-3 py-2 rounded-lg">
                  {event.date}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  {event.link && (<a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-yellow-400 hover:underline"
                  >
                    Read more
                  </a>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}