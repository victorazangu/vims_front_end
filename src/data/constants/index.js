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
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import dayGridPlugin from "@fullcalendar/daygrid";
const navigation = {
  dashboard: {
    title: "Dashboard",
    icon: faTachometerAlt,
    items: [{ title: "Overview", link: "/" }],
  },
  students: {
    title: "Students",
    icon: faUserGraduate,
    items: [{ title: "Students", link: "/students" }],
  },
  teachers: {
    title: "Teachers",
    icon: faChalkboardTeacher,
    items: [{ title: "Teachers", link: "/teachers" }],
  },
  classes: {
    title: "Classes",
    icon: faBook,
    items: [{ title: "Classes", link: "/classes" }],
  },
  subjects: {
    title: "Subjects",
    icon: faClipboardList,
    items: [
      { title: "Subjects", link: "/subjects/all-subjects" },
      { title: "Subjects Per Class", link: "/subjects/classes" },
    ],
  },
  attendance: {
    title: "Attendance",
    icon: faCalendarCheck,
    items: [
      { title: "Attendance", link: "/attendance/mark" },
      { title: "Per Class", link: "/attendance/report" },
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
  fees: {
    title: "Fees",
    icon: faDollar,
    items: [{ title: "Fees", link: "/fees" }],
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
  { header: "First Name", accessor: "first_name" },
  { header: "Last Name", accessor: "last_name" },
  { header: "Date of Birth", accessor: "dob" },
  { header: "Address", accessor: "address" },
];

const tableData = [
  {
    first_name: "John",
    last_name: "Doe",
    dob: "1990-01-01",
    address: "123 Apple St, Cupertino, CA",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  
];

const tableActions = [
  { label: "View", icon: faEye, link: "/view" },
  { label: "Edit", icon: faEdit, link: "/edit" },
  { label: "Delete", icon: faTrash, link: "/delete" },
];

const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  input: [65, 59, 80, 81, 56, 55, 40],
  title: "Sales Over Time",
  header: "Sales Data",
  label: "Sales",
  backgroundColor: "#ba9d70",
  borderColor: "#f0f0f0",
  titleColor: "#ba9d70",
  labelsColor: "#ba9d70",
};

const bubleGraphData = {
  label: "First Dataset",
  data: [
    { x: 10, y: 50, r: 15 },
    { x: 20, y: 55, r: 10 },
    { x: 30, y: 60, r: 25 },
    { x: 40, y: 70, r: 20 },
  ],
  backgroundColor: "#ba9d70",
};

const gaugeGraphData = {
  labels: ["Conversion Rate", "Remaining"],
  input: [75],
  backgroundColor: ["#ba9d70", "red"],
  stats: [
    {
      title: "Total",
      value: 37,
    },
    {
      title: "Completed",
      value: 10,
    },
    {
      title: "Active",
      value: 5,
    },
  ],
};

const lineGraphData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  input: [65, 59, 80, 81, 56, 55, 40],
  label: "Sales",
  header: "Sales Data",
  title: "Sales Over Time",
  backgroundColor: "#ba9d70",
  borderColor: "#f0f0f0",
  titleColor: "#ba9d70",
  labelsColor: "#ba9d70",
};

const pieGraphData = {
  labels: ["Red", "Blue", "Yellow"],
  input: [300, 50, 100],
  label: "First Dataset",
  colors: ["#ba9d70", "#f0f0f0", "#36a2eb"],
};

const daughnutGraphData = {
  labels: ["Sales", "Returns", "Shipping", "Other"],
  input: [300, 50, 100, 150],
  label: "Expenses",
  colors: ["#ba9d70", "#ff6384", "#36a2eb", "#cc65fe"],
};

const calenderConfigAndData = {
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  events: [
    { title: "Meeting", start: "2025-01-14" },
    { title: "Date", start: "2025-01-15" },
  ],
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,dayGridDay",
  },
};

export {
  navigation,
  radioOptions,
  checkboxes,
  tableColumns,
  tableData,
  tableActions,
  barChartData,
  bubleGraphData,
  gaugeGraphData,
  pieGraphData,
  daughnutGraphData,
  lineGraphData,
  calenderConfigAndData
};
