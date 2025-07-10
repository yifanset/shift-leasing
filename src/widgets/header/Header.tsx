import classes from "./Header.module.css";
import {Link} from "react-router-dom";
import logo from "./assets/logo.svg"
import people from "./assets/people.svg"
import clock from "./assets/clock.svg"
import logout from "./assets/logout.svg"
import moon from "./assets/moon.svg"


const Header = () => {
    return (
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                <div className={classes.txtLogo}>
                    ШИФТ<br/>RENT
                </div>
                <img
                    src={logo}
                    alt="logo"
                    width={37}
                    height={29.75}
                />
            </Link>
            <nav>
                <Link to="/profile" className={classes.link}>
                    <img
                        src={people}
                        alt="people"
                        width={16}
                        height={16}
                    />
                    <div className={classes.txt}>Профиль</div>
                </Link>
                <Link to="/orders" className={classes.link}>
                    <img
                        src={clock}
                        alt="clock"
                        width={16}
                        height={16}
                    />
                    <div className={classes.txt}>Заказы</div>
                </Link>
            </nav>
            <div className={classes.rightBlock}>
                <div className={classes.logout}>
                    <img
                        src={logout}
                        alt="logout"
                        width={17.6}
                        height={18}
                    />
                    <div className={classes.txt}>Выйти</div>
                </div>
                <img
                    src={moon}
                    alt="moon"
                    width={24}
                    height={24}
                />
            </div>
        </div>
    );
};

export default Header;