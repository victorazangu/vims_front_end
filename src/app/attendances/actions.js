
import { MOCKED_STUDENTS, MOCKED_ATTENDANCE_DATA, MOCKED_CLASS_DATA } from "@/data/constants";

export const fetchMockedData = async () => {
    return new Promise((resolve) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
        const daysInMonth = new Date(
            currentYear,
            currentDate.getMonth() + 1,
            0
        ).getDate();
        const mockedAttendance = {
           ...MOCKED_ATTENDANCE_DATA
        };

      MOCKED_STUDENTS.forEach((student) => {
          mockedAttendance[student.name] = {};
          for (let i = 0; i < daysInMonth; i++) {
              const day = String(i + 1).padStart(2, "0");
              const formattedDate = `${currentYear}-${currentMonth}-${day}`;
              mockedAttendance[student.name][formattedDate] = Math.random() < 0.5;
          }
      });
        const mockedData = {
            students: MOCKED_STUDENTS,
            attendance: mockedAttendance,
            classData: MOCKED_CLASS_DATA,
        };
        setTimeout(() => {
            resolve(mockedData);
        }, 200);
    });
};