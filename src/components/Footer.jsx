import style from "../styles/footer.module.css";

function Footer() {
    return (
        <div className={style.footer}>
            &copy; Copyright {new Date().getFullYear()} by TravelBook
        </div>
    );
}

export default Footer;
