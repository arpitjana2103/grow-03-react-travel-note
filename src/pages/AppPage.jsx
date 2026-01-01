import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import style from "./../styles/appPage.module.css";

function AppPage() {
    return (
        <div className={style.appPage}>
            <Sidebar />
            <Map />
            {/* <p>User</p> */}
        </div>
    );
}

export default AppPage;
