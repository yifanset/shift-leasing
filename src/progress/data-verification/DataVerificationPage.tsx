import classes from "./DataVerificationPage.module.css";
import MyProgressBar from "../../shared/UI/progress-bar/MyProgressBar.tsx";
import ReservationData from "./components/reservation-data/ReservationData.tsx";
import CustomerData from "./components/customer-data/CustomerData.tsx";
import SummaryBlock from "./components/summary-block/SummaryBlock.tsx";
import MyButton from "../../shared/UI/button/MyButton.tsx";
import {Link, useNavigate} from "react-router-dom";



const DataVerificationPage = () => {
    const navigate = useNavigate()


    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <div className={classes.title}>
                    Бронирование авто
                </div>
                <MyProgressBar currentStep={3}/>
                <ReservationData/>
                <CustomerData/>
                <SummaryBlock/>
                <div className={classes.btns}>
                    <MyButton onClick={() => navigate(-1)} className={classes.btn1}>
                        Назад
                    </MyButton>
                    <Link to={"/success"}>
                        <MyButton className={classes.btn2}>
                            Забронировать
                        </MyButton>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default DataVerificationPage;