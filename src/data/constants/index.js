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
import DefaultImage from "@/assets/images/default.png";
import UserImage from "@/assets/images/user.jpg";
const navigation = {
  dashboard: {
    title: "Dashboard",
    icon: faTachometerAlt,
    items: [{ title: "Overview", link: "/" }],
  },
  students: {
    title: "Students",
    icon: faUserGraduate,
    items: [
      { title: "Form 1", link: "/students" },
      { title: "Form 2", link: "/students" },
      { title: "Form 3", link: "/students" },
      { title: "Form 4", link: "/students" },
    ],
  },
  teachers: {
    title: "Teachers",
    icon: faChalkboardTeacher,
    items: [{ title: "Teachers", link: "/teachers" }],
  },
  classes: {
    title: "Classes",
    icon: faBook,
    items: [
      { title: "Form 1", link: "/classes" },
      { title: "Form 2", link: "/classes" },
      { title: "Form 3", link: "/classes" },
      { title: "Form 4", link: "/classes" },
    ],
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

const teachersData = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Software Engineer",
    image: DefaultImage,
  },
  {
    id: 2,
    name: "Bob Smith",
    designation: "Product Manager",
    image: DefaultImage,
  },
  {
    id: 3,
    name: "Charlie Davis",
    designation: "UI/UX Designer",
    image: DefaultImage,
  },
  {
    id: 4,
    name: "David Lee",
    designation: "Frontend Developer",
    image: DefaultImage,
  },
  {
    id: 5,
    name: "Eva Adams",
    designation: "Backend Developer",
    image: DefaultImage,
  },
  {
    id: 6,
    name: "Frank Moore",
    designation: "QA Engineer",
    image: DefaultImage,
  },
  {
    id: 7,
    name: "Grace Taylor",
    designation: "Product Designer",
    image: DefaultImage,
  },
  {
    id: 8,
    name: "Henry Wilson",
    designation: "Marketing Specialist",
    image: DefaultImage,
  },
  {
    id: 9,
    name: "Ivy Brown",
    designation: "HR Manager",
    image: DefaultImage,
  },
  {
    id: 10,
    name: "Jack White",
    designation: "Chief Technology Officer",
    image: DefaultImage,
  },
  {
    id: 11,
    name: "Kara Green",
    designation: "Sales Manager",
    image: DefaultImage,
  },
  {
    id: 12,
    name: "Leo Harris",
    designation: "Customer Support Specialist",
    image: DefaultImage,
  },
  {
    id: 13,
    name: "Mona Scott",
    designation: "Finance Manager",
    image: DefaultImage,
  },
  {
    id: 14,
    name: "Nina Martin",
    designation: "Social Media Manager",
    image: DefaultImage,
  },
  {
    id: 15,
    name: "Oscar Young",
    designation: "Business Analyst",
    image: DefaultImage,
  },
  {
    id: 16,
    name: "Paul Carter",
    designation: "Content Strategist",
    image: DefaultImage,
  },
  {
    id: 17,
    name: "Quincy Allen",
    designation: "Lead Developer",
    image: DefaultImage,
  },
  {
    id: 18,
    name: "Rachel King",
    designation: "Project Manager",
    image: DefaultImage,
  },
  {
    id: 19,
    name: "Steve White",
    designation: "Security Engineer",
    image: DefaultImage,
  },
  {
    id: 20,
    name: "Tina Walker",
    designation: "Marketing Director",
    image: DefaultImage,
  },
];

const teachersDataTwo = [
  {
    name: "Leslie Alexander",
    title: "Co-Founder / CEO",
    emp_id: "VSA-001",
    imgSrc: UserImage,
  },
  {
    name: "Michael Foster",
    title: "Co-Founder / CTO",
    emp_id: "VSA-002",
    imgSrc: UserImage,
  },
  {
    name: "Dries Vincent",
    title: "Business Relations",
    emp_id: "VSA-003",
    imgSrc: UserImage,
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    emp_id: "VSA-004",
    imgSrc: UserImage,
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    emp_id: "VSA-005",
    imgSrc: UserImage,
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    emp_id: "VSA-006",
    imgSrc: UserImage,
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    emp_id: "VSA-007",
    imgSrc: UserImage,
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    emp_id: "VSA-008",
    imgSrc: UserImage,
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    emp_id: "VSA-005",
    imgSrc: UserImage,
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    emp_id: "VSA-006",
    imgSrc: UserImage,
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    emp_id: "VSA-007",
    imgSrc: UserImage,
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    emp_id: "VSA-008",
    imgSrc: UserImage,
  },
  {
    name: "Leslie Alexander",
    title: "Co-Founder / CEO",
    emp_id: "VSA-001",
    imgSrc: UserImage,
  },
  {
    name: "Michael Foster",
    title: "Co-Founder / CTO",
    emp_id: "VSA-002",
    imgSrc: UserImage,
  },
  {
    name: "Dries Vincent",
    title: "Business Relations",
    emp_id: "VSA-003",
    imgSrc: UserImage,
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    emp_id: "VSA-004",
    imgSrc: UserImage,
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    emp_id: "VSA-005",
    imgSrc: UserImage,
  },
];
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
  calenderConfigAndData,
  teachersData,
  teachersDataTwo,
};
