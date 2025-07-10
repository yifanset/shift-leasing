import React from "react";
import classes from "./MyInput.module.css";

interface MyInputProps {
    type?: "text" | "password" | "email" | "tel" | "search" | "date";
    value?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    required?: boolean;
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(
    (
        {
            type = "text",
            value,
            onChange,
            placeholder,
            className = "",
            style,
            name,
            disabled = false,
            required = false,
        },
        ref
    ) => {
        return (
            <input
                ref={ref}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                className={`${classes.myInput} ${className}`} // объединяем стили
                style={style}
                disabled={disabled}
                required={required}
            />
        );
    }
);

MyInput.displayName = "MyInput";

export default MyInput;