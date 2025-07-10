import { useEffect, useState } from 'react';
import axios from 'axios';
import { CarCard } from "../../../../entities/cars/CarCard";
import classes from './CardList.module.css';

interface Media {
    url: string;
    isCover?: boolean;
}

interface Car {
    id: string;
    brand: string;
    name: string;
    transmission: string;
    price: number;
    media: Media[];
}

interface ApiResponse {
    success: boolean;
    data: Car[];
    meta: {
        limit: number;
    };
}

const CardList = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get<ApiResponse>(
                    'https://shift-intensive.ru/api/cars/info?limit=10'
                );

                if (response.data.success) {
                    setCars(response.data.data);
                }
            } catch (error) {
                console.error('Ошибка при загрузке:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return <div className={classes.loading}>Загрузка...</div>;
    }

    if (cars.length === 0) {
        return <div className={classes.empty}>Нет доступных автомобилей</div>;
    }

    return (
        <div className={classes.gridContainer}>
            {cars.map((car) => (
                <CarCard
                    key={car.id}
                    id={car.id}
                    name={car.name}
                    brand={car.brand}
                    transmission={car.transmission}
                    price={car.price.toString()}
                    media={car.media}
                />
            ))}
        </div>
    );
};

export default CardList;