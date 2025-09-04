"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from 'next/image';

// Type definitions for event data
type EventType = {
  year: number;
  month: number;
  day: number;
  title: string;
  link?: string;
  description: string;
  image?: string;
};

// --- Raw Event Data ---
// This serves as the single source of truth for all events.
// The dates are now stored as numbers for easier sorting and filtering.
const eventsData: EventType[] = [
  {
    year: 2025,
    month: 8, // September (months are 0-indexed in JS Date objects)
    day: 15,
    title: "Mid-term Examinations Begin",
    description: "The official start date for the mid-term examination period for all students."
  },
  {
    year: 2025,
    month: 8,
    day: 22,
    title: "Project Submission Deadline",
    description: "Final deadline for all project submissions. Please ensure all work is submitted by 11:59 PM."
  },
  {
    year: 2025,
    month: 9, // October
    day: 12,
    title: "Industrial Visit by IETE-SF",
    description: "A scheduled industrial visit organized by the IETE-SF committee for all members.",
  },
  {
    year: 2025,
    month: 9,
    day: 13,
    title: "Cultural Night by Cultural Committee",
    description: "An evening of music, dance, and cultural performances hosted by the Cultural Committee.",
  },
  {
    year: 2025,
    month: 9,
    day: 16,
    title: "Event by IEC",
    description: "An event organized by the Indian Electrical & Electronics Committee (IEC). Details to be announced."
  },
  {
    year: 2025,
    month: 9,
    day: 17,
    title: "Event by ACM/IEC",
    description: "A collaborative event between the ACM and IEC committees."
  },
  {
    year: 2025,
    month: 9,
    day: 18,
    title: "Blood Donation Drive",
    description: "A two-day blood donation drive organized by the Social Impact Committee.",
    image: "https://images.unsplash.com/photo-1579684385153-f7267104ae23?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    year: 2025,
    month: 9,
    day: 19,
    title: "Blood Donation Drive (Day 2)",
    description: "A two-day blood donation drive organized by the Social Impact Committee.",
    image: "https://images.unsplash.com/photo-1579684385153-f7267104ae23?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    year: 2025,
    month: 9,
    day: 20,
    title: "Karl's Terzaghi Memorial Day",
    description: "An expert lecture by CESA on Karl's Terzaghi Memorial Day."
  },
  {
    year: 2025,
    month: 9,
    day: 21,
    title: "Google Cloud Campaign",
    description: "A special campaign on Google Cloud organized by GDSC."
  },
  {
    year: 2025,
    month: 9,
    day: 22,
    title: "BOTSON 8.0",
    description: "An annual robotics event organized by IET."
  },
  {
    year: 2025,
    month: 9,
    day: 23,
    title: "Literary Workshop",
    description: "A workshop on creative writing and literature by the Editorial Board."
  },
  {
    year: 2025,
    month: 9,
    day: 25,
    title: "Blind Date With A Book",
    description: "An engaging event by the Editorial Board."
  },
  {
    year: 2025,
    month: 9,
    day: 26,
    title: "Blind Date With A Book (Day 2)",
    description: "An engaging event by the Editorial Board."
  },
  {
    year: 2025,
    month: 9,
    day: 27,
    title: "Mental Health Day",
    description: "A day dedicated to mental health awareness organized by the Social Impact Committee."
  },
  {
    year: 2025,
    month: 9,
    day: 28,
    title: "Forging Your Way 2.0",
    description: "A technical event organized by ASME."
  },
  {
    year: 2025,
    month: 9,
    day: 31,
    title: "Rahasya",
    description: "An event organized by the Editorial Board."
  },
  {
    year: 2025,
    month: 9,
    day: 31,
    title: "Emporia",
    description: "An event organized by the 4C committee."
  },
  {
    year: 2025,
    month: 10, // November
    day: 2,
    title: "Industry Expert Talk",
    description: "An expert talk session organized by Findrome."
  },
  {
    year: 2025,
    month: 10,
    day: 3,
    title: "Mumbai MUN",
    description: "The annual Model United Nations conference by MunSociety MPSTME.",
    link: "https://mumbaimun.com"
  }
];

// Month names mapping
const monthNames = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

// Utility function to get the date of an event
const getEventDate = (event: EventType): Date => {
  return new Date(event.year, event.month, event.day);
};

export default function EventCalendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  // Memoize all events, sorted chronologically
  const sortedEvents = useMemo(() => {
    return [...eventsData].sort((a, b) => {
      const dateA = getEventDate(a).getTime();
      const dateB = getEventDate(b).getTime();
      return dateA - dateB;
    });
  }, []);

  // Filter events for the currently displayed month
  const eventsThisMonth = useMemo(() => {
    return sortedEvents.filter(
      (event) => event.year === currentYear && event.month === currentMonth
    );
  }, [currentYear, currentMonth, sortedEvents]);

  // Group events by day for easy calendar lookup
  const eventsByDay = useMemo(() => {
    const grouped: { [day: number]: EventType[] } = {};
    eventsThisMonth.forEach((event) => {
      const day = event.day;
      if (!grouped[day]) grouped[day] = [];
      grouped[day].push(event);
    });
    return grouped;
  }, [eventsThisMonth]);

  // Calendar grid logic
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [...Array(firstDayOfWeek).fill(null)];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  }, [firstDayOfWeek, daysInMonth]);

  // Navigation handlers
  const prevMonth = useCallback(() => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  }, [currentMonth]);

  const nextMonth = useCallback(() => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  }, [currentMonth]);
  
  // Handlers for the modal
  const handleEventClick = useCallback((event: EventType) => {
    setSelectedEvent(event);
  }, []);
  
  const closeModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  return (
    <main className="w-full min-h-screen bg-black text-white flex flex-col items-center p-4 font-sans">
      <div className="w-full max-w-6xl mt-12 md:mt-24">
        {/* --- Calendar View Section --- */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-8 text-center">Event Calendar</h1>
        
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="px-3.5 py-1.5 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors text-sm font-semibold">
            Prev
          </button>
          <h2 className="text-xl md:text-2xl font-bold text-center">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button onClick={nextMonth} className="px-3.5 py-1.5 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors text-sm font-semibold">
            Next
          </button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium text-yellow-400 text-sm md:text-base pb-2">
              {day}
            </div>
          ))}

          {calendarDays.map((day, idx) =>
            day === null ? (
              <div key={idx} />
            ) : (
              <div
                key={idx}
                className="border border-gray-700 rounded-lg p-2 flex flex-col justify-start items-start relative min-h-[100px] hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="text-xs md:text-sm font-semibold text-gray-300 mb-1">{day}</div>
                
                <div className="w-full space-y-1">
                  {eventsByDay[day]?.map((event, i) => (
                    <div
                      key={i}
                      onClick={() => handleEventClick(event)}
                      className="block bg-yellow-400 text-black px-1.5 py-0.5 text-[10px] md:text-xs rounded-md truncate hover:bg-yellow-300 transition-colors"
                      title={event.title}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      
      {/* --- Timeline View Section --- */}
      <div className="w-full max-w-6xl mt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 text-center">Upcoming Events</h2>
        
        <div className="space-y-8">
          {sortedEvents.map((event, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg bg-gray-900 border border-gray-700 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex-shrink-0 w-full md:w-36 text-center md:text-left mb-4 md:mb-0">
                <p className="text-lg font-bold text-yellow-300">
                  {monthNames[event.month]} {event.day}
                </p>
                <p className="text-sm text-gray-400">{event.year}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-yellow-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{event.description}</p>
                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 text-sm mt-2 inline-block transition-colors">
                    Read more →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Modal for Event Details --- */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full relative border border-gray-700">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl">
              &times;
            </button>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-400 mb-4">
              {monthNames[selectedEvent.month]} {selectedEvent.day}, {selectedEvent.year}
            </p>
            {selectedEvent.image && (
                <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4">
                    <Image
                        src={selectedEvent.image}
                        alt={selectedEvent.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <p className="text-gray-200 text-base">{selectedEvent.description}</p>
            {selectedEvent.link && (
              <a 
                href={selectedEvent.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors font-semibold"
              >
                Visit Link
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}