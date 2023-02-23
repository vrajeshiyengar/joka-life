export const applications = {
  cards: [
    {
      title: "Bulletin Board",
      redirectUrl: "http://student.iimcal.ac.in/bb",
      requiresJokaAuth: false,
    },
    {
      title: "Course Web",
      redirectUrl: "https://courseweb.iimcal.ac.in/login/index.php",
      requiresJokaAuth: false,
    },
    {
      title: "Joka Directory",
      // redirectUrl: "http://student.iimcal.ac.in/jd",
      requiresJokaAuth: true,
    },
    {
      title: "Academic Mangement System",
      redirectUrl: "http://ams.iimcal.ac.in/iimc",
      requiresJokaAuth: false,
    },
  ],
  utils: [
    {
      title: "Joka Yellow Pages",
      redirectUrl:
        "https://docs.google.com/spreadsheets/d/1JB_8PVjOccaWssHDU7NWdKkmxFrG-G4deB2Ep76nSfA/",
      requiresJokaAuth: false,
    },
    {
      title: "Joka Utils",
      redirectUrl: "https://vrajeshiyengar.github.io/joka-utils/",
      requiresJokaAuth: false,
    },
    {
      title: "Library",
      redirectUrl: "https://library.iimcal.ac.in/",
      requiresJokaAuth: false,
    },
    {
      title: "Course Registration",
      redirectUrl: "https://iimcal.coursebidding.com/",
      requiresJokaAuth: false,
    },
  ],
  clubs: [
    {
      title: "PMTech Club",
      redirectUrl: "https://www.linkedin.com/company/pmtechiimc",
      requiresJokaAuth: false,
    },
  ],
  other: [
    {
      title: "IIM Calcutta",
      redirectUrl: "https://www.iimcal.ac.in/",
      requiresJokaAuth: false,
    },
  ],
};

export const apis = {
  login: "http://student.iimcal.ac.in/api/auth/login",
  forgotPassword: "http://student.iimcal.ac.in/passwordResetApp#/",
  verifyAccessToken: "http://student.iimcal.ac.in/api/auth/verifyAccessToken",
};

export const socials = {
  iimc: "https://www.iimcal.ac.in/",
  linkedin:
    "https://www.linkedin.com/school/indian-institute-of-management-calcutta/",
  instagram: "https://www.instagram.com/iimcalcutta/",
  facebook: "https://www.facebook.com/iimcalcutta",
  twitter: "https://twitter.com/IIM_Calcutta",
  youtube: "https://www.youtube.com/user/IIMCalcutta",
};

const config = {
  applications,
  apis,
  socials,
};
export default config;
