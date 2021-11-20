import React,{useContext} from "react"
import styles from "./style.module.css";
import HeroSection from "../../components/HeroSection";
import NewArrival from "../../components/NewArrival";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";

function LandingPage() {
  
  // console.log(state.sideBarToggle);
  return (
    <div className={styles.main}
    style={
      {width:"100%"}
    }
    >
      <TopNavbar />
      <HeroSection />
      <NewArrival />
      <Footer />
       {/* <SideNav /> */}
    </div>
  );
}

export default LandingPage;
