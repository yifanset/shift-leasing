import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from "./PhotosBlock.module.css";
import errorImage from "../../assets/error.jpg"; // Импортируем fallback-изображение

interface Media {
    url: string;
    isCover?: boolean;
}

interface PhotosBlockProps {
    carId: string;
}

const PhotosBlock = ({ carId }: PhotosBlockProps) => {
    const [media, setMedia] = useState<Media[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCarMedia = async () => {
            try {
                const response = await axios.get(`https://shift-intensive.ru/api/cars/info/${carId}`);
                if (response.data.success) {
                    setMedia(response.data.data.media || []);
                }
            } catch (err) {
                setError('Не удалось загрузить фотографии');
                console.error('Error fetching car media:', err);
            } finally {
                setLoading(false);
            }
        };

        if (carId) {
            fetchCarMedia();
        }
    }, [carId]);

    const getFullUrl = (path: string) => path
        ? `https://shift-intensive.ru/api${path}`
        : errorImage;

    if (loading) {
        return <div className={classes.loading}>Загрузка фотографий...</div>;
    }

    if (error) {
        return <div className={classes.error}>{error}</div>;
    }

    const coverImage = media.find(item => item.isCover) || media[0];
    const thumbnails = media.filter(item => item);

    const displayThumbnails = [...thumbnails];
    while (displayThumbnails.length < 3) {
        displayThumbnails.push({ url: errorImage });
    }

    return (
        <div className={classes.photos}>
            <img
                className={classes.bigPhoto}
                src={coverImage ? getFullUrl(coverImage.url) : errorImage}
                alt={coverImage?.isCover ? 'Основное фото автомобиля' : 'Фото автомобиля'}
                width={500}
                height={293.1}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = errorImage;
                }}
            />

            <div className={classes.miniPhotos}>
                {displayThumbnails.slice(0, 3).map((photo, index) => (
                    <img
                        key={index}
                        className={classes.miniPhoto}
                        src={getFullUrl(photo.url)}
                        alt={`Фото автомобиля ${index + 1}`}
                        width={155.19}
                        height={94.33}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = errorImage;
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotosBlock;