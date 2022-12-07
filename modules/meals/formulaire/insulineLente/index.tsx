import React from "react";
import style from "./style.module.css";

const FormInsulineLente = () => {
    return (
        <div>
            <form className={style.insulineLenteContainer}>
                <label htmlFor={style.IL}>Insuline Lente : </label>
                <div>
                    <input id={style.IL} type="number" placeholder="IL" />
                    <input type="submit" value="ADD" />
                </div>
            </form>
        </div>
    );
};

export default FormInsulineLente;
