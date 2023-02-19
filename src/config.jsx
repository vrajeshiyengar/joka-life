import IIMCLogo from "./assets/iimc_logo.png";
// import more icons similarly for different apps
const env = "LOCAL";
const applications = {
  LOCAL: [
    // {jokaBackend runs on 3000}
    // {JokaLife runs on 4000}
    // {Password Reset runs on 4001}
    // {Timetable runs on 4002}
    // {Joka Directory runs on 4003}
    {
      title: "Joka Directory",
      description: "Sample description",
      redirectUrl: "http://localhost:4003/",
      icon: IIMCLogo,
      requiresJokaAuth: true,
    },
    {
      title: "Timetable",
      description: "Sample description",
      redirectUrl: "http://localhost:4002/",
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
      description: "Check your grades, attendance and more",
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
  ],
  DEV: [
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
  ],
  PROD: [
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
  ],
};

const apis = {
  LOCAL: {
    login: "http://localhost:3000/api/auth/login",
    forgotPassword:
      "http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/passwordResetApp#/",
    verifyAccessToken: "http://localhost:3000/api/auth/verifyAccessToken",
  },
  DEV: {
    login:
      "http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/login",
    forgotPassword:
      "http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/passwordResetApp#/",
    verifyAccessToken:
      "http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/verifyAccessToken",
  },
  PROD: {
    login:
      "http://ec2-3-7-207-170.ap-south-1.compute.amazonaws.com/api/auth/login",
    forgotPassword:
      "http://ec2-3-7-207-170.ap-south-1.compute.amazonaws.com/passwordResetApp#/",
    verifyAccessToken:
      "http://ec2-3-7-207-170.ap-south-1.compute.amazonaws.com/api/auth/verifyAccessToken",
  },
};
const exportObj = {
  applications: applications[env],
  apis: apis[env],
};
export default exportObj;
