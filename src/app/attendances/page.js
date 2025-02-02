"use client";

import { useState, useEffect } from "react";
import WeeklyAttendance from "./weekly-attendance";
import styles from "./attendance.module.css";
import { fetchMockedData } from "./actions";
import { Layout } from "@/components";

const getFormattedDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const Page = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    getMonday(new Date())
  );
  const [attendanceData, setAttendanceData] = useState({});
  const [students, setStudents] = useState([]);
  const [classData, setClassData] = useState(null);
  const weekDays = getWeekDays(currentWeekStart);

  useEffect(() => {
    const fetchAttendance = async () => {
      const data = await fetchMockedData();
      console.log("data", data);
      setAttendanceData(data.attendance);
      setStudents(data.students);
      setClassData(data.classData);
    };

    fetchAttendance();
  }, []);

  const handleWeekChange = (increment) => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() + increment * 7);
    setCurrentWeekStart(newWeekStart);
  };

  const handleAttendanceChange = (studentId, date, isChecked) => {
    const currentAttendance = { ...attendanceData };
    if (currentAttendance[studentId]) {
      currentAttendance[studentId][date] = isChecked;
    } else {
      currentAttendance[studentId] = { [date]: isChecked };
    }
    setAttendanceData(currentAttendance);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>
          Attendance for {classData?.className} ({classData?.teacher})
        </h1>
        <div className={styles.weekNavigation}>
          <button onClick={() => handleWeekChange(-1)}> Previous Week</button>
          <span>Week of {getFormattedDate(currentWeekStart)}</span>
          <button onClick={() => handleWeekChange(1)}>Next Week </button>
        </div>
        <WeeklyAttendance
          weekDays={weekDays}
          attendanceData={attendanceData}
          onAttendanceChange={handleAttendanceChange}
          students={students}
        />
      </div>
    </Layout>
  );
};

function getMonday(date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

function getWeekDays(weekStart) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    days.push(getFormattedDate(day));
  }
  return days;
}

export default Page;
