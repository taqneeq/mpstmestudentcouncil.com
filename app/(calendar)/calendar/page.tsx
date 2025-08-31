'use client'

import { useState } from 'react'
import '@/app/css/event.css'

export const metadata = {
  title: 'Committees',
  description: 'The various committees of MPSTME',
}

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

// Get unique months from events
const getMonths = (events: any[]): string[] => {
  const months = new Set<string>()
  events.forEach((event: { date: string }) => {
    const dateStr = event.date || ''
    const match = dateStr.match(/([A-Za-z]+)/)
    if (match) months.add(match[1])
  })
  return ['All', ...Array.from(months)]
}

export default function EventCalendar() {
  const [selectedMonth, setSelectedMonth] = useState('All')
  const months = getMonths(events)

  const filteredEvents = selectedMonth === 'All'
    ? events
    : events.filter(event =>
        event.date?.includes(selectedMonth)
      )

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Event Calendar
      </h1>

      {/* Month Filter Dropdown */}
      <div className="flex justify-center mb-10">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-800 text-yellow-400 border border-yellow-400"
        >
          {months.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-12">
        {filteredEvents.map((event, index) => (
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
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      className="text-sm text-yellow-400 hover:underline"
                    >
                      Read more
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
