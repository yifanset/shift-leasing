import React from 'react';
import classes from "./MyButton.module.css";

interface MyButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: React.CSSProperties;
}

const MyButton: React.FC<MyButtonProps> =
    ({
       children,
       onClick,
       className = '',
       style,
    }) => {
    return (
        <button
            onClick={onClick}
            className={`${classes.myButton} ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};

export default MyButton;