import classes from "./CarCard.module.css";
import MyButton from "../../shared/UI/button/MyButton.tsx";
import { Link } from "react-router-dom";
import errorImage from "./assets/error.jpg"; // Импортируем fallback-изображение

interface Media {
    url: string;
    isCover?: boolean;
}

interface CarCardProps {
    id: string;
    name: string;
    brand: string;
    transmission: string;
    price: string;
    media: Media[];
    className?: string;
}

export const CarCard = ({
                            id,
                            name,
                            brand,
                            transmission,
                            price,
                            media,
                            className = ''
                        }: CarCardProps) => {
    // 1. Находим cover-изображение или первое доступное
    const coverImage = media.find(item => item.isCover) || media[0];

    // 2. Формируем полный URL изображения
    const imageUrl = coverImage
        ? `https://shift-intensive.ru/api${coverImage.url}` // Добавляем базовый URL
        : '';

    const formatPrice = (priceString: string) => {
        return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
    };

    const calculateTotalPrice = () => {
        const priceNumber = parseInt(price.replace(/\s+/g, ''), 10);
        return (priceNumber * 14).toString();
    };

    const totalPrice = calculateTotalPrice();

    return (
        <div className={`${classes.container} ${className}`}>
            <Link to={`/cars/${id}`} className={classes.imageLink}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={`${brand} ${name}`}
                        width={300}
                        height={220}
                        className={classes.image}
                        onError={(e) => {
                            // Обработка ошибки загрузки изображения
                            (e.target as HTMLImageElement).src = errorImage;
                            (e.target as HTMLImageElement).onerror = null; // Предотвращаем зацикливание
                        }}
                    />
                ) : (
                    <img
                        src={errorImage}
                        alt="Автомобиль недоступен"
                        width={300}
                        height={220}
                        className={classes.image}
                    />
                )}
            </Link>

            <div className={classes.content}>
                <h3 className={classes.name}>{brand} {name}</h3>
                <p className={classes.description}>
                    {transmission === 'automatic' ? 'Автомат' : 'Механика'}
                </p>

                <div className={classes.priceBlock}>
                    <div className={classes.price}>
                        {formatPrice(price)}
                    </div>
                    <div className={classes.sumPrice}>
                        {formatPrice(totalPrice)} <span className={classes.daysText}>за 14 дней</span>
                    </div>
                </div>

                <Link to={`/cars/${id}`} className={classes.imageLink}>
                    <MyButton className={classes.btn}>
                        Выбрать
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};