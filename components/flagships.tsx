export default function Flagships({ events: events }: any) {
  return (
    <div className="max-w-3xl flex flex-col gap-6 mx-auto text-center pb-12 md:pb-20">
      <h2 className="h2 mb-4">Flagship Events</h2>
      {events.map((event: any) => (
        <>
          <h2 key={event.id} className="text-xl text-white font-bold">
            {event.title}
          </h2>
          <p className="text-xl text-gray-400 mb-6">{event.description}</p>
        </>
      ))}
    </div>
  );
}
