import classes from "./MyProgressBar.module.css";
import { useState, useEffect } from "react";

interface MyProgressBarProps {
    currentStep: number;
    totalSteps?: number;
}

const MyProgressBar = ({ currentStep, totalSteps = 3 }: MyProgressBarProps) => {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        // Анимация заполнения при изменении шага
        const targetWidth = (currentStep / totalSteps) * 100;
        setProgressWidth(targetWidth);
    }, [currentStep, totalSteps]);

    return (
        <div className={classes.container}>
            <div className={classes.progressInfo}>
                Шаг {currentStep} из {totalSteps}
            </div>
            <div className={classes.progressBar}>
                <div
                    className={classes.progressFill}
                    style={{ width: `${progressWidth}%` }}
                ></div>
            </div>
        </div>
    );
};

export default MyProgressBar;