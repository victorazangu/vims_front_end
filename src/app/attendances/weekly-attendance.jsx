'use client';
import styles from './attendance.module.css';
import React from 'react';

const WeeklyAttendance = ({ weekDays, attendanceData, onAttendanceChange }) => {
    const studentIds = Object.keys(attendanceData);

  const isPastDay = (date) => {
    const today = new Date();
    const dateToCheck = new Date(date);
      const todayString = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toDateString();
      const dateToCheckString = new Date(dateToCheck.getFullYear(), dateToCheck.getMonth(), dateToCheck.getDate()).toDateString();
      return dateToCheckString < todayString;
  };

  return (
    <table className={styles.attendanceTable}>
      <thead>
        <tr>
          <th>Student</th>
          {weekDays.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {studentIds.map((studentId) => (
            <tr key={studentId}>
            <td>{studentId}</td>
              {weekDays.map((day) => (
                  <td key={day}>
                    <input
                      type="checkbox"
                        checked={attendanceData[studentId]?.[day] || false}
                      onChange={(e) => onAttendanceChange(studentId, day, e.target.checked)}
                        disabled={isPastDay(day)}
                    />
                  </td>
              ))}
            </tr>
          ))}

      </tbody>
    </table>
  );
};

export default WeeklyAttendance;