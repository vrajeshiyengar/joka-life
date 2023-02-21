// import IIMCLogo from "./assets/iimc_logo.png";
// import bbBg from "./assets/card-bg-bb.png";
// import cwBg from "./assets/card-bg-cw.jpg";
// import jdBg from "./assets/card-bg-jd.png";
// import amsBg from "./assets/card-bg-ams.png";
// import ypBg from "./assets/button-bg-yp.png";
// import ttBg from "./assets/button-bg-tt.png";
// import libBg from "./assets/button-bg-lib.png";
// import crBg from "./assets/button-bg-cr.png";
// import bg1 from "./assets/card-bg-white-1.png";
// import bg2 from "./assets/card-bg-white-2.png";
// import bg3 from "./assets/card-bg-white-3.png";

import IIMCLogo from "./assets/compressed/iimc_logo-min.png";
import bbBg from "./assets/compressed/card-bg-bb-min.png";
import cwBg from "./assets/compressed/card-bg-cw-min.jpg";
import jdBg from "./assets/compressed/card-bg-jd-min.png";
import amsBg from "./assets/compressed/card-bg-ams-min.png";
import ypBg from "./assets/compressed/button-bg-yp-min.png";
import ttBg from "./assets/compressed/button-bg-tt-min.png";
import libBg from "./assets/compressed/button-bg-lib-min.png";
import crBg from "./assets/compressed/button-bg-cr-min.png";
import bg1 from "./assets/compressed/card-bg-white-1-min.png";
import bg2 from "./assets/compressed/card-bg-white-2-min.png";
import bg3 from "./assets/compressed/card-bg-white-3-min.png";
// import more icons similarly for different apps
export const applications = {
  cards: [
    {
      title: "Bulletin Board",
      redirectUrl: "http://student.iimcal.ac.in/bb",
      bg: bg1,
      fontColor: "black",
      requiresJokaAuth: false,
    },
    {
      title: "Course Web",
      redirectUrl: "https://courseweb.iimcal.ac.in/login/index.php",
      bg: bg2,
      fontColor: "black",
      requiresJokaAuth: false,
    },
    {
      title: "Joka Directory",
      redirectUrl: "", // enter a blank string in redirectUrl to disable the tile and add a "coming soon" to the tile.
      bg: bg3,
      fontColor: "black",
      requiresJokaAuth: true,
    },
    {
      title: "Academic Mangement System",
      redirectUrl: "http://student.iimcal.ac.in/iimc/system/login.jsp",
      bg: amsBg,
      fontColor: "white",
      requiresJokaAuth: false,
    },
  ],
  utils: [
    {
      title: "IIMC Yellow Pages",
      redirectUrl:
        "https://docs.google.com/spreadsheets/d/1JB_8PVjOccaWssHDU7NWdKkmxFrG-G4deB2Ep76nSfA/",
      bg: ypBg,
      fontColor: "white",
      requiresJokaAuth: false,
    },
    {
      title: "Joka Utils",
      redirectUrl: "https://vrajeshiyengar.github.io/joka-utils/",
      bg: ttBg,
      fontColor: "white",
      requiresJokaAuth: false,
    },
    {
      title: "Library",
      redirectUrl: "https://library.iimcal.ac.in/",
      bg: libBg,
      fontColor: "white",
      requiresJokaAuth: false,
    },
    {
      title: "Course Registration",
      redirectUrl: "https://iimcal.coursebidding.com/",
      bg: crBg,
      fontColor: "white",
      requiresJokaAuth: false,
    },
  ],
  clubs: [
    {
      title: "PMTech Club",
      redirectUrl: "https://www.linkedin.com/company/pmtechiimc",
      bg: IIMCLogo,
      fontColor: "black",
      requiresJokaAuth: false,
    },
  ],
  other: [
    {
      title: "IIM Calcutta",
      redirectUrl: "https://www.iimcal.ac.in/",
      bg: IIMCLogo,
      fontColor: "black",
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
