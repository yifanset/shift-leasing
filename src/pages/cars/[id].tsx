import { useParams } from "react-router-dom";
import classes from "./CarsDetails.module.css";

import ArrowBack from "./components/arrow-back/ArrowBack.tsx";
import PhotosBlock from "./components/photos-block/PhotosBlock.tsx";
import ContentBlock from "./components/content-block/ContentBlock.tsx";

export default function CarsDetails() {
    const { carId } = useParams<{ carId: string }>();

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <ArrowBack />
                <main>
                    <PhotosBlock carId={carId} />
                    <ContentBlock carId={carId} />
                </main>
            </div>
        </div>
    );
}