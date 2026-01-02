import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
// import styles from './Footer.module.css'
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      {/* <p> List of cities</p> */}
      <Footer />
    </div>
  );
}
