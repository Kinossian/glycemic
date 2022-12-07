import React, { useMemo } from "react";
import mathDotRound from "../../../utils/math/dot-round";
import { MealAlimentInterface } from "../card";
import style from "./style.module.css";

const TotalGlucide = ({ meals }: any) => {
    const callbackCalculateTotalGlucideMeals = () => {
        const callbackMealsReducer = (
            total: number,
            meal: MealAlimentInterface
        ) => {
            const { aliment } = meal;
            const calculateGlucide =
                total + (aliment.glucide / aliment.gramme) * meal.gramme;
            return calculateGlucide;
        };
        const sumTotalGlucide = meals.reduce(callbackMealsReducer, 0);
        return sumTotalGlucide;
    };
    const totalGlucideMeals = useMemo(callbackCalculateTotalGlucideMeals, [
        meals,
    ]);
    const totalGlucideMealsDotRound = mathDotRound(totalGlucideMeals);

    return (
        <div className={style.totalGlucideContainer}>
            <p className={style.totalGlucide}>
                Total : <span> {totalGlucideMealsDotRound} Glu</span>
            </p>
        </div>
    );
};

export default TotalGlucide;
