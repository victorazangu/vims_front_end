"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CustomeFullCalender = ({
  plugins = [dayGridPlugin],
  initialView = "dayGridMonth",
  events = [],
  headerToolbar,
  ...rest
}) => {
  return (
    <FullCalendar
      plugins={plugins}
      initialView={initialView}
      events={events}
      headerToolbar={headerToolbar}
      {...rest}
    />
  );
};

export default CustomeFullCalender;
