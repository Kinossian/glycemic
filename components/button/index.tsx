import React, { useCallback } from "react";
import style from "./style.module.css";

const Button = ({ onClick, children }: any) => {
    const handleOnClick = useCallback(
        (e: any) => {
            e.preventDefault();
            onClick();
        },
        [onClick]
    );
    return (
        <button onClick={handleOnClick} className={style.button}>
            {children}
        </button>
    );
};

export default Button;
