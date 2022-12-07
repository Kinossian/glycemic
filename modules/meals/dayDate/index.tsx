import React from "react";
import dateFormater from "../../../utils/dateFormater";
import style from "./style.module.css";
import timeToday from "../../../utils/time/today";

const MealsDayDate = () => {
    return (
        <div>
            <h5 className={style.dayDate}>{dateFormater(timeToday())}</h5>
        </div>
    );
};

export default MealsDayDate;
