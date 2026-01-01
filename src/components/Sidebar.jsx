import { Outlet } from "react-router";
import style from "./../styles/sideBar.module.css";
import AppNav from "./AppNav";
import Footer from "./Footer";
import LogoBox from "./LogoBox";

function Sidebar() {
    return (
        <div className={style.sideBar}>
            <LogoBox />
            <AppNav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Sidebar;
