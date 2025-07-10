import classes from "./SummaryBlock.module.css";


const SummaryBlock = () => {
    return (
        <div className={classes.container}>
            <div className={classes.summary}>
                <div className={classes.txt}>
                    Итого:
                </div>
                <div className={classes.sum}>
                    35 000 ₽
                </div>
            </div>
            <div className={classes.time}>
                Аренда: 1 – 8 апреля (7 дней)
            </div>
        </div>
    );
};

export default SummaryBlock;