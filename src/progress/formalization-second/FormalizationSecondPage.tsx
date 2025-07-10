import classes from "./FormalizationSecondPage.module.css";
import MyProgressBar from "../../shared/UI/progress-bar/MyProgressBar.tsx";
import MyInput from "../../shared/UI/input/MyInput.tsx";
import MyButton from "../../shared/UI/button/MyButton.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { validateEmail, validatePhone } from "../../features/validation/validation";

interface IPersonalData {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: string;
    phone: string;
    email: string;
    comment: string;
}

const initialFormData: IPersonalData = {
    lastName: "",
    firstName: "",
    middleName: "",
    birthDate: "",
    phone: "",
    email: "",
    comment: ""
};

const FormalizationSecondPage = () => {
    const [formData, setFormData] = useState<IPersonalData>(initialFormData);
    const [errors, setErrors] = useState<Partial<IPersonalData>>({});
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = localStorage.getItem("personalData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name as keyof IPersonalData]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<IPersonalData> = {};

        if (!formData.lastName.trim()) newErrors.lastName = "Введите фамилию";
        if (!formData.firstName.trim()) newErrors.firstName = "Введите имя";
        if (!formData.birthDate) newErrors.birthDate = "Введите дату рождения";

        if (!formData.phone) {
            newErrors.phone = "Введите номер телефона";
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = "Неверный формат телефона";
        }

        if (!formData.email) {
            newErrors.email = "Введите email";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Неверный формат email";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        localStorage.setItem("personalData", JSON.stringify(formData));

        navigate("/verification");
    };


    return (
        <div className={classes.container}>
            <div className={classes.title}>Ваши данные</div>
            <MyProgressBar currentStep={2}/>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Фамилия*</label>
                <MyInput
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`${classes.input} ${errors.lastName ? classes.error : ""}`}
                    placeholder="Иванов"
                />
                {errors.lastName && <span className={classes.errorText}>{errors.lastName}</span>}
            </div>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Имя*</label>
                <MyInput
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`${classes.input} ${errors.firstName ? classes.error : ""}`}
                    placeholder="Иван"
                />
                {errors.firstName && <span className={classes.errorText}>{errors.firstName}</span>}
            </div>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Отчество</label>
                <MyInput
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className={classes.input}
                    placeholder="Иванович"
                />
            </div>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Дата рождения*</label>
                <MyInput
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className={`${classes.input} ${errors.birthDate ? classes.error : ""}`}
                />
                {errors.birthDate && <span className={classes.errorText}>{errors.birthDate}</span>}
            </div>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Телефон*</label>
                <MyInput
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${classes.input} ${errors.phone ? classes.error : ""}`}
                    placeholder="+7 (999) 123-45-67"
                />
                {errors.phone && <span className={classes.errorText}>{errors.phone}</span>}
            </div>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Email*</label>
                <MyInput
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${classes.input} ${errors.email ? classes.error : ""}`}
                    placeholder="example@mail.ru"
                />
                {errors.email && <span className={classes.errorText}>{errors.email}</span>}
            </div>

            <div className={classes.formGroup}>
                <label className={classes.txt}>Комментарий</label>
                <MyInput
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className={classes.input}
                    placeholder="Дополнительная информация"
                />
            </div>

            <div className={classes.btns}>
                <MyButton onClick={() => navigate(-1)} className={classes.btn1}>
                    Назад
                </MyButton>
                <MyButton onClick={handleSubmit} className={classes.btn2}>
                    Продолжить
                </MyButton>
            </div>
        </div>
    );
};

export default FormalizationSecondPage;