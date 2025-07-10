import classes from "./ReservationData.module.css";
import pencil from "../assets/pencil.svg"

const ReservationData = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Данные брони</div>

            <div className={classes.informationColumn}>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Автомобиль</div>
                    <div className={classes.txt2}>Chery Arrizo 8</div>
                </div>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Даты брони</div>
                    <div className={classes.txt2}>01.04.2025 – 08.04.2025</div>
                </div>
            </div>
            <div className={classes.informationColumn}>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Место получения</div>
                    <div className={classes.txt2}>Место получения</div>
                </div>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Место возврата</div>
                    <div className={classes.txt2}>Место возврата</div>
                </div>
            </div>
            <img
                src={pencil}
                alt="pencil"
                width={18.06}
                height={18.72}
            />
        </div>
    );
};

export default ReservationData;