import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from "./ContentBlock.module.css";
import MyButton from "../../../../shared/UI/button/MyButton.tsx";
import { Link } from "react-router-dom";

interface CarDetails {
    id: string;
    name: string;
    brand: string;
    transmission: string;
    steering: string;
    bodyType: string;
    color: string;
    price: number;

}

interface ContentBlockProps {
    carId: string;
}

const ContentBlock = ({ carId }: ContentBlockProps) => {
    const [car, setCar] = useState<CarDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`https://shift-intensive.ru/api/cars/info/${carId}`);
                setCar(response.data.data);
            } catch (err) {
                setError('Не удалось загрузить данные автомобиля');
                console.error('Error fetching car details:', err);
            } finally {
                setLoading(false);
            }
        };

        if (carId) {
            fetchCarDetails();
        }
    }, [carId]);

    if (loading) {
        return <div className={classes.loading}>Загрузка...</div>;
    }

    if (error) {
        return <div className={classes.error}>{error}</div>;
    }

    if (!car) {
        return <div className={classes.empty}>Данные автомобиля не найдены</div>;
    }

    // Форматирование цены
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
    };

    // Расчет стоимости за 7 дней
    const calculateWeekPrice = (dailyPrice: number) => {
        return dailyPrice * 7;
    };

    return (
        <div className={classes.container}>
            <div className={classes.name}>{car.brand} {car.name}</div>

            <div className={classes.title}>Характеристики</div>
            <table className={classes.table}>
                <tbody>
                <tr>
                    <th>Коробка передач</th>
                    <td>{car.transmission === 'automatic' ? 'Автоматическая' : 'Механическая'}</td>
                </tr>
                <tr>
                    <th>Руль</th>
                    <td>{car.steering === 'left' ? 'Левый' : 'Правый'}</td>
                </tr>
                <tr>
                    <th>Тип кузова</th>
                    <td>{car.bodyType}</td>
                </tr>
                <tr>
                    <th>Цвет</th>
                    <td>{car.color}</td>
                </tr>
                </tbody>
            </table>

            <div className={classes.title}>Стоимость</div>
            <table className={classes.table}>
                <tbody>
                <tr>
                    <th>Цена за день</th>
                    <td>{formatPrice(car.price)}</td>
                </tr>
                <tr>
                    <th>Аренда на 7 дней</th>
                    <td>{formatPrice(calculateWeekPrice(car.price))}</td>
                </tr>
                <tr className={classes.sum}>
                    <th>Итого</th>
                    <td>{formatPrice(calculateWeekPrice(car.price))}</td>
                </tr>
                </tbody>
            </table>

            <div className={classes.btns}>
                <Link to="/">
                    <MyButton className={classes.btn1}>
                        Назад
                    </MyButton>
                </Link>

                <Link to={`/reservation`}>
                    <MyButton className={classes.btn2}>
                        Забронировать
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};

export default ContentBlock;