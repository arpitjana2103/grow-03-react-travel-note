import { useNavigate } from "react-router";
import styles from "../styles/cityItem.module.css";
import { formatDate } from "../helper.js";

function CityItem({ city, active }) {
    const { cityName, emoji, date, id } = city;
    const navigate = useNavigate();
    function navigateToCityRoute() {
        navigate(`/app/city/${id}`);
    }
    return (
        <li onClick={navigateToCityRoute}>
            <div
                className={`${styles.cityItem} ${
                    active ? styles.activeCityItem : ""
                }`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.cityName}>{cityName}</h3>
                <time className={styles.time}>{formatDate(date)}</time>
                <button onClick={() => {}} className={styles.deleteBtn}>
                    &times;
                </button>
            </div>
        </li>
    );
}

export default CityItem;
