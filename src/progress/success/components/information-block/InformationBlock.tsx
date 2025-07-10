import classes from "./InformationBlock.module.css"

const InformationBlock = () => {
    return (
        <div className={classes.container}>
            <div className={classes.informationBlock}>
                <div className={classes.txt1}>Статус</div>

                <div className={classes.status}>
                    <div className={classes.ellipse}/>
                    <div className={classes.txt2}>Создано</div>
                </div>
            </div>
            <div className={classes.informationBlock}>
                <div className={classes.txt1}>Автомобиль</div>
                <div className={classes.txt2}>Chery Arrizo 8</div>
            </div>
            <div className={classes.informationBlock}>
                <div className={classes.txt1}>Даты брони</div>
                <div className={classes.txt2}>01.04.2025 – 08.04.2025</div>
            </div>
            <div className={classes.informationBlock}>
                <div className={classes.txt1}>Место получения</div>
                <div className={classes.txt2}>Место получения</div>
            </div>
            <div className={classes.informationBlock}>
                <div className={classes.txt1}>Место возврата</div>
                <div className={classes.txt2}>Место возврата</div>
            </div>
            <div className={classes.txt1}>Вся информация была продублирована в SMS</div>
        </div>
    );
};

export default InformationBlock;