import classes from "./FormalizationFirstPage.module.css";
import MyProgressBar from "../../shared/UI/progress-bar/MyProgressBar.tsx";
import MyInput from "../../shared/UI/input/MyInput.tsx";
import MyButton from "../../shared/UI/button/MyButton.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale"; // исправленный импорт
registerLocale("ru", ru);

interface IBookingFormData {
    startDate: Date | null;
    endDate: Date | null;
    pickupLocation: string;
    returnLocation: string;
}

const FormalizationFirstPage = () => {
    const [formData, setFormData] = useState<IBookingFormData>({
        startDate: null,
        endDate: null,
        pickupLocation: '',
        returnLocation: ''
    });

    const navigate = useNavigate();

    const handleDateChange = (update: [Date | null, Date | null]) => {
        setFormData(prev => ({
            ...prev,
            startDate: update[0],
            endDate: update[1]
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Валидация данных
        if (!formData.startDate || !formData.endDate) {
            alert('Пожалуйста, выберите даты аренды');
            return;
        }

        if (!formData.pickupLocation || !formData.returnLocation) {
            alert('Пожалуйста, укажите места получения и возврата');
            return;
        }

        // Сохранение данных (можно в localStorage, контекст или Redux)
        localStorage.setItem('bookingFormData', JSON.stringify(formData));

        // Переход на следующую страницу
        navigate("/your-data");
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Бронирование авто
            </div>
            <MyProgressBar currentStep={1}/>
            <div className={classes.txt}>Даты аренды</div>
            <DatePicker
                selectsRange={true}
                startDate={formData.startDate}
                endDate={formData.endDate}
                onChange={handleDateChange}
                isClearable={true}
                placeholderText="Даты аренды"
                className={classes.datePickerInput}
                locale="ru"
                dateFormat="dd.MM.yyyy"
            />
            <div className={classes.txt}>Место получения</div>
            <MyInput
                className={classes.input}
                type={"text"}
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                placeholder={"Место получения"}
            />

            <div className={classes.txt}>Место возврата</div>
            <MyInput
                className={classes.input}
                type={"text"}
                name="returnLocation"
                value={formData.returnLocation}
                onChange={handleInputChange}
                placeholder={"Место возврата"}
            />

            <div className={classes.btns}>
                <MyButton onClick={() => navigate(-1)} className={classes.btn1}>
                    Назад
                </MyButton>

                <MyButton
                    onClick={handleSubmit}
                    className={classes.btn2}
                >
                    Продолжить
                </MyButton>
            </div>
        </div>
    );
};

export default FormalizationFirstPage;