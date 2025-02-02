
import {
    MOCKED_STUDENTS,
    MOCKED_GRADES_DATA,
    MOCKED_CLASS_DATA,
  } from "@/data/constants";
  
  export const fetchMockedGradesData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockedData = {
          students: MOCKED_STUDENTS,
          grades: MOCKED_GRADES_DATA,
          classData: MOCKED_CLASS_DATA,
        };
        resolve(mockedData);
      }, 200);
    });
  };