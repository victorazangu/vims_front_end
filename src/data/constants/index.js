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
      { title: "Students", link: "/students" },
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
      { title: "Classes", link: "/classes" },
    ],
  },
  subjects: {
    title: "Subjects",
    icon: faClipboardList,
    items: [
      { title: "Subjects", link: "/subjects" },
    ],
  },
  attendance: {
    title: "Attendance",
    icon: faCalendarCheck,
    items: [
      { title: "Attendance", link: "/attendances" },
    ],
  },
  grades: {
    title: "Grades",
    icon: faChartBar,
    items: [
      { title: "Grades", link: "/grades" },

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
      { title: "Settings", link: "/settings" },
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
    id: 1,
    first_name: "John",
    last_name: "Doe",
    dob: "1990-01-01",
    address: "123 Apple St, Cupertino, CA",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    id: 3,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    id: 4,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    id: 5,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    id: 6,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    id: 7,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    id: 8,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    id: 9,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    id: 10,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
  {
    id: 11,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1985-05-15",
    address: "456 Microsoft Way, Redmond, WA",
  },
  {
    id: 12,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1992-07-20",
    address: "789 Magic Ln, Cupertino, CA",
  },
];

const tableActions = [
  { label: "View", icon: faEye, link: (id) => `/${id}` },
  { label: "Edit", icon: faEdit, link: (id) => `/${id}` },
  { label: "Delete", icon: faTrash, link: (id) => `/${id}` },
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
const classesData = [
  {
    id: "1",
    title: "Math Class",
    start: "2025-01-20T10:00:00",
    end: "2025-01-20T12:00:00",
    description: "This is a Math class covering algebra and geometry.",
    location: "Room 101",
  },
  {
    id: "2",
    title: "Science Class",
    start: "2025-01-21T14:00:00",
    end: "2025-01-21T16:00:00",
    description: "This is a Science class focusing on chemistry basics.",
    location: "Room 202",
  },
  {
    id: "3",
    title: "History Class",
    start: "2025-02-05T09:00:00",
    end: "2025-02-05T11:00:00",
    description: "This is a History class discussing World War II.",
    location: "Room 103",
  },
  {
    id: "4",
    title: "English Class",
    start: "2025-03-12T13:00:00",
    end: "2025-03-12T15:00:00",
    description: "This is an English class on creative writing techniques.",
    location: "Room 104",
  },
  {
    id: "5",
    title: "Physics Class",
    start: "2025-04-18T10:00:00",
    end: "2025-04-18T12:00:00",
    description: "This is a Physics class on motion and forces.",
    location: "Room 201",
  },
  {
    id: "6",
    title: "Chemistry Class",
    start: "2025-05-09T14:00:00",
    end: "2025-05-09T16:00:00",
    description: "This is a Chemistry class on organic compounds.",
    location: "Room 202",
  },
  {
    id: "7",
    title: "Biology Class",
    start: "2025-06-15T09:00:00",
    end: "2025-06-15T11:00:00",
    description: "This is a Biology class on human anatomy.",
    location: "Room 203",
  },
  {
    id: "8",
    title: "Economics Class",
    start: "2025-07-10T13:00:00",
    end: "2025-07-10T15:00:00",
    description: "This is an Economics class on supply and demand.",
    location: "Room 204",
  },
  {
    id: "9",
    title: "Computer Science Class",
    start: "2025-08-23T10:00:00",
    end: "2025-08-23T12:00:00",
    description: "This is a Computer Science class on algorithms.",
    location: "Room 301",
  },
  {
    id: "10",
    title: "Art Class",
    start: "2025-09-30T14:00:00",
    end: "2025-09-30T16:00:00",
    description: "This is an Art class on painting techniques.",
    location: "Room 302",
  },
  {
    id: "11",
    title: "Philosophy Class",
    start: "2025-10-22T09:00:00",
    end: "2025-10-22T11:00:00",
    description: "This is a Philosophy class on ethics and morality.",
    location: "Room 303",
  },
  {
    id: "12",
    title: "Music Class",
    start: "2025-11-15T13:00:00",
    end: "2025-11-15T15:00:00",
    description: "This is a Music class on classical compositions.",
    location: "Room 304",
  },
  {
    id: "13",
    title: "Physical Education",
    start: "2025-12-05T10:00:00",
    end: "2025-12-05T12:00:00",
    description: "This is a PE class focusing on fitness exercises.",
    location: "Gym",
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
  classesData,
};
