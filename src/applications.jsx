import IIMCLogo from "./assets/iimc_logo.png";
// import more icons similarly for different apps

export default [
  {
    title: "Joka Directory",
    description: "Sample description",
    redirectUrl: "https://student.iimcal.ac.in/jd",
    icon: IIMCLogo,
    requiresJokaAuth: true,
  },
  {
    title: "Timetable",
    description: "Sample description",
    redirectUrl: "https://student.iimcal.ac.in/tt",
    icon: IIMCLogo,
    requiresJokaAuth: true,
  },
  {
    title: "Bulletin Board",
    description: "Sample description",
    redirectUrl: "http://student.iimcal.ac.in/bb/",
    icon: IIMCLogo,
    requiresJokaAuth: false,
  },
  {
    title: "Course Web",
    description: "Sample description",
    redirectUrl: "https://courseweb.iimcal.ac.in/login/index.php",
    icon: IIMCLogo,
    requiresJokaAuth: false,
  },
  {
    title: "Academic Mangement System",
    description:
      "Sample description description description description description",
    redirectUrl: "http://student.iimcal.ac.in/iimc/system/login.jsp",
    icon: IIMCLogo,
    requiresJokaAuth: false,
  },
  {
    title: "Library",
    description: "Sample description",
    redirectUrl: "https://library.iimcal.ac.in/",
    icon: IIMCLogo,
    requiresJokaAuth: false,
  },
  {
    title: "IIM Calcutta",
    description: "Sample description of what happens here",
    redirectUrl: "https://www.iimcal.ac.in/",
    icon: IIMCLogo,
    requiresJokaAuth: false,
  },
];
