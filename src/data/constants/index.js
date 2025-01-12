import {
  faTachometerAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faClipboardList,
  faCalendarCheck,
  faChartBar,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const navigation = {
  dashboard: {
    title: "Dashboard",
    icon: faTachometerAlt, 
    items: [
      { title: "Overview", link: "/dashboard/overview" },
      { title: "Activity", link: "/dashboard/activity" },
    ],
  },
  students: {
    title: "Students",
    icon: faUserGraduate, 
    items: [
      { title: "Student List", link: "/students/list" },
      { title: "Add Student", link: "/students/add" },
      { title: "Student Details", link: "/students/details" },
    ],
  },
  teachers: {
    title: "Teachers",
    icon: faChalkboardTeacher, 
    items: [
      { title: "Teacher List", link: "/teachers/list" },
      { title: "Add Teacher", link: "/teachers/add" },
    ],
  },
  classes: {
    title: "Classes",
    icon: faBook, 
    items: [
      { title: "Class List", link: "/classes/list" },
      { title: "Add Class", link: "/classes/add" },
    ],
  },
  subjects: {
    title: "Subjects",
    icon: faClipboardList, 
    items: [
      { title: "Subject List", link: "/subjects/list" },
      { title: "Assign Subject", link: "/subjects/assign" },
    ],
  },
  attendance: {
    title: "Attendance",
    icon: faCalendarCheck, 
    items: [
      { title: "Mark Attendance", link: "/attendance/mark" },
      { title: "Attendance Report", link: "/attendance/report" },
    ],
  },
  grades: {
    title: "Grades",
    icon: faChartBar, 
    items: [
      { title: "Grade List", link: "/grades/list" },
      { title: "Add Grades", link: "/grades/add" },
    ],
  },
  settings: {
    title: "Settings",
    icon: faCogs, 
    items: [
      { title: "School Settings", link: "/settings/school" },
      { title: "User Management", link: "/settings/users" },
    ],
  },
};

export { navigation };
