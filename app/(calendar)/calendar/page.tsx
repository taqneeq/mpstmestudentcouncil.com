"use client"

import React, { useState, useMemo } from "react";
// No need to import Tooltip, we'll use the native title attribute for simplicity

type EventType = {
  year?: string;
  date: string;
  title: string;
  link?: string;
};

// Raw event data
const eventsData: EventType[] = [
  {
    year: "2025",
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
    date: "November 3",
    title: "Mumbai MUN By MunSociety MPSTME",
    link: "https://mumbaimun.com",
  },
  {
    date: "September 15",
    title: "Mid-term Examinations Begin",
  },
  {
    date: "September 22",
    title: "Project Submission Deadline",
  },
];

const monthIndexMap: { [key: string]: number } = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
};

/**
 * Parses the string date from an event object into a JavaScript Date.
 * Handles events that might span multiple days (e.g., "November 3/4/5").
 * It will use the first day mentioned for calendar placement.
 * @param event - The event object to parse.
 * @returns A Date object or null if parsing fails.
 */
function parseEventDate(event: EventType): Date | null {
  try {
    // Extract the year from the event's year string (e.g., "October 2023" -> "2023")
    const yearStr = event.year?.match(/\d{4}/)?.[0];
    if (!yearStr) return null; // A year is required
    
    const year = Number(yearStr);
    
    // Take the part before any slashes to handle date ranges
    const primaryDatePart = event.date.split("/")[0].trim();
    
    // Extract month name and day number
    const monthName = primaryDatePart.replace(/[0-9]/g, '').trim();
    const day = Number(primaryDatePart.replace(/\D/g, '').trim());

    const month = monthIndexMap[monthName];
    if (month === undefined || !day) return null; // Invalid month or day

    return new Date(year, month, day);
  } catch {
    return null;
  }
}

export default function EventCalendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const monthNames = Object.keys(monthIndexMap);
  
  // Memoize the processed events to add missing year properties.
  // This prevents events from disappearing if they don't explicitly state a year.
  const processedEvents = useMemo(() => {
    let lastSeenYear: string | undefined;
    return eventsData.map(event => {
      if (event.year) {
        lastSeenYear = event.year;
        return event;
      }
      return { ...event, year: lastSeenYear };
    }).filter(event => event.year); // Ensure event has a year
  }, []);

  // Filter events for the currently displayed month
  const eventsThisMonth = useMemo(() => {
    return processedEvents.filter((event) => {
      const date = parseEventDate(event);
      return (
        date &&
        date.getFullYear() === currentYear &&
        date.getMonth() === currentMonth
      );
    });
  }, [currentYear, currentMonth, processedEvents]);

  // Group events by their day number for easy lookup
  const eventsByDay = useMemo(() => {
    const grouped: { [day: number]: EventType[] } = {};
    eventsThisMonth.forEach((event) => {
      const date = parseEventDate(event);
      if (date) {
        const day = date.getDate();
        if (!grouped[day]) grouped[day] = [];
        grouped[day].push(event);
      }
    });
    return grouped;
  }, [eventsThisMonth]);


  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  
  // **ERROR FIX:** Using spread syntax to create a combined array with the correct type (number | null)[].
  // This resolves the "No overload matches this call" error.
  const calendarDays: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <main className="w-full min-h-screen bg-black text-white flex flex-col items-center p-4 font-sans">
      {/* UI ADJUSTMENT: Added a container with top margin and scaling */}
      <div className="w-full max-w-6xl mt-[200px] transform origin-top">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="px-3.5 py-1.5 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors text-sm font-semibold">
            Prev
          </button>
          <h2 className="text-2xl font-bold text-center">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button onClick={nextMonth} className="px-3.5 py-1.5 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors text-sm font-semibold">
            Next
          </button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium text-yellow-400 text-sm pb-2">
              {day}
            </div>
          ))}

          {calendarDays.map((day, idx) =>
            day === null ? (
              <div key={idx} />
            ) : (
              <div
                key={idx}
                className="border border-gray-700 rounded-lg p-1.5 flex flex-col justify-start items-start relative min-h-[80px] hover:bg-gray-800 transition-colors"
              >
                <div className="text-xs font-semibold text-gray-300 mb-1">{day}</div>
                
                <div className="w-full space-y-1">
                  {eventsByDay[day]?.map((event, i) => (
                     <a 
                      key={i}
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block bg-yellow-400 text-black px-1.5 py-0.5 text-[10px] rounded-md truncate ${event.link ? 'cursor-pointer hover:bg-yellow-300' : 'cursor-default'}`}
                      title={event.title} // Native browser tooltip
                    >
                      {event.title}
                    </a>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
