import classes from "./SuccessPage.module.css"
import accept from "./assets/accept.svg"
import InformationBlock from "./components/information-block/InformationBlock.tsx";
import {Link} from "react-router-dom";
import MyButton from "../../shared/UI/button/MyButton.tsx";

const SuccessPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <img
                    src={accept}
                    alt="accept"
                    width={56}
                    height={56}
                />
                <h2>Автомобиль забронирован</h2>
            </div>
            <InformationBlock/>
            <div className={classes.btns}>
                <Link to={"/orders"}>
                    <MyButton className={classes.btn1}>
                        Посмотреть статус
                    </MyButton>
                </Link>
                <Link to={"/"}>
                    <MyButton className={classes.btn2}>
                        На главную
                    </MyButton>
                </Link>
            </div>

        </div>
    );
};

export default SuccessPage;