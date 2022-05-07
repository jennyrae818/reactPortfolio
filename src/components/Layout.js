import { Outlet } from "react-router-dom";
import Header from "./header.js"
import NavTabs from "./NavTabs.js";
import Footer from "./footer.js";
//import Aboutme from "./aboutMe.js";
import "../styles/style.css";

const Layout = () => {
  return (
    <>

     
      <NavTabs />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;