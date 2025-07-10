import classes from "./CustomerData.module.css";
import pencil from "../assets/pencil.svg";

const CustomerData = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>Данные заказчика</div>

            <div className={classes.informationColumn}>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>ФИО</div>
                    <div className={classes.txt2}>Иванов Иван Иванович</div>
                </div>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Дата рождения</div>
                    <div className={classes.txt2}>01.01.1980</div>
                </div>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Номер телефона</div>
                    <div className={classes.txt2}>Номер телефона</div>
                </div>
            </div>
            <div className={classes.informationColumn}>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Электронная почта</div>
                    <div className={classes.txt2}>Электронная почта</div>
                </div>
                <div className={classes.informationBlock}>
                    <div className={classes.txt1}>Комментарий</div>
                    <div className={classes.txt2}>Дополнительная информация</div>
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

export default CustomerData;