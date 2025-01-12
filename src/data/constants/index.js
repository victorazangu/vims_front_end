import {
  faTachometerAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faClipboardList,
  faCalendarCheck,
  faChartBar,
  faCogs,
  faEdit,
  faTrash,
  faEye,
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

const radioOptions = [
  { id: "push-everything", label: "Everything", disabled: false },
  { id: "push-email", label: "Same as email", disabled: false },
];

const checkboxes = [
  { label: "Option 1", description: "This is option 1", value: "option1" },
  { label: "Option 2", description: "This is option 2", value: "option2" },
  { label: "Option 3", description: "This is option 3", value: "option3" },
];

const tableColumns = [
  { header: "Product name", accessor: "name" },
  { header: "Color", accessor: "color" },
  { header: "Category", accessor: "category" },
  { header: "Price", accessor: "price" },
];

const tableData = [
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
];

const tableActions = [
  { label: "View", icon: faEye, link: "/view" },
  { label: "Edit", icon: faEdit, link: "/edit" },
  { label: "Delete", icon: faTrash, link: "/delete" },
];

export {
  navigation,
  radioOptions,
  checkboxes,
  tableColumns,
  tableData,
  tableActions,
};
