import IIMCLogo from "./assets/iimc_logo.png";
import cardBg from "./assets/card-bg-white.png";
// import more icons similarly for different apps
export const applications = {
  cards: [
    {
      title: "Bulletin Board",
      redirectUrl: "http://student.iimcal.ac.in/bb",
      bg: cardBg,
      requiresJokaAuth: false,
    },
    {
      title: "Course Web",
      redirectUrl: "https://courseweb.iimcal.ac.in/login/index.php",
      bg: cardBg,
      requiresJokaAuth: false,
    },
    {
      title: "Joka Directory",
      redirectUrl: "", // enter a blank string in redirectUrl to disable the tile and add a "coming soon" to the tile.
      bg: cardBg,
      requiresJokaAuth: true,
    },
    {
      title: "Academic Mangement System",
      redirectUrl: "http://student.iimcal.ac.in/iimc/system/login.jsp",
      bg: cardBg,
      requiresJokaAuth: false,
    },
  ],
  utils: [
    {
      title: "Joka Yellow Pages",
      redirectUrl:
        "https://docs.google.com/spreadsheets/d/1JB_8PVjOccaWssHDU7NWdKkmxFrG-G4deB2Ep76nSfA/",
      bg: cardBg,
      requiresJokaAuth: false,
    },
    {
      title: "Joka Utils",
      redirectUrl: "https://vrajeshiyengar.github.io/joka-utils/",
      bg: cardBg,
      requiresJokaAuth: false,
    },
    {
      title: "Library",
      redirectUrl: "https://library.iimcal.ac.in/",
      bg: cardBg,
      requiresJokaAuth: false,
    },
    {
      title: "Course Registration",
      redirectUrl: "https://iimcal.coursebidding.com/",
      bg: cardBg,
      requiresJokaAuth: false,
    },
  ],
  clubs: [
    {
      title: "PMTech Club",
      redirectUrl: "https://www.linkedin.com/company/pmtechiimc",
      bg: cardBg,
      requiresJokaAuth: false,
    },
  ],
  other: [
    {
      title: "IIM Calcutta",
      redirectUrl: "https://www.iimcal.ac.in/",
      bg: cardBg,
      requiresJokaAuth: false,
    },
  ],
};

export const apis = {
  login: "/api/auth/login",
  forgotPassword: "/passwordResetApp#/",
  verifyAccessToken: "/api/auth/verifyAccessToken",
};
const config = {
  applications,
  apis,
};
export default config;
