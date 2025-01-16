"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = ({ events }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Class Schedule</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        height="auto"
        className="rounded-lg shadow-lg"
      />

      {/* Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="mb-2">
              <span className="font-semibold">Start:</span>{" "}
              {selectedEvent.start.toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-semibold">End:</span>{" "}
              {selectedEvent.end.toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Description:</span>{" "}
              {selectedEvent.extendedProps.description}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Location:</span>{" "}
              {selectedEvent.extendedProps.location}
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
