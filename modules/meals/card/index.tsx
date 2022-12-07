import React, { FunctionComponent, useMemo } from "react";
import style from "./style.module.css";
import { MealInterface } from "../interface";
import { dataAlimentInterface } from "../../aliments/interface";
import mathDotRound from "../../../utils/math/dot-round";

export interface MealAlimentInterface extends MealInterface {
    aliment: dataAlimentInterface;
}

const MealCard: FunctionComponent<{ meal: MealAlimentInterface }> = ({
    meal,
}) => {
    const totalGlucide = useMemo(() => {
        const { aliment } = meal;
        return mathDotRound((aliment.glucide / aliment.gramme) * meal.gramme);
    }, [meal]);

    return (
        <>
            <div className={style.summary}>
                <h4>{meal.aliment.name}</h4>
                <p>{totalGlucide} glu</p>
            </div>
        </>
    );
};

export default MealCard;
