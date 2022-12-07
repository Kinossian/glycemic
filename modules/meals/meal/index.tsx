import React, { FunctionComponent, useEffect, useState } from "react";
import MealsSummary from "../summary";
import style from "./style.module.css";
import AddMeals from "../formulaire/addMeals/index";
import FormInsulineRapide from "../formulaire/insulineRapide";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.config";
import { useCallback } from "react";
import { MealAlimentInterface } from "../card";
import timeToday from "../../../utils/time/today";
import TotalGlucide from "../totalGlucide";

export enum MealType {
    BREAKFAST = "breakfast",
    LUNCH = "lunch",
    SNACK = "snack",
    DINER = "diner",
}

const MealStyle: Record<MealType, string> = {
    [MealType.BREAKFAST]: style.breakfast,
    [MealType.LUNCH]: style.lunch,
    [MealType.SNACK]: style.snack,
    [MealType.DINER]: style.diner,
};

const MealTitle: Record<MealType, string> = {
    [MealType.BREAKFAST]: "Petit Dèj",
    [MealType.LUNCH]: "Dèjeuner",
    [MealType.SNACK]: "Collation",
    [MealType.DINER]: "Diner",
};

type MealProps = {
    mealType: MealType;
    onAddedMeal(meal: { type: MealType; meal: any; gramme: number }): void;
};

const Meal: FunctionComponent<MealProps> = ({ mealType, onAddedMeal }) => {
    const [isActive, setIsActive] = useState(false);

    const handleAddedMeal = useCallback(
        (addedMeal: any) => {
            onAddedMeal({
                ...addedMeal,
                mealType,
            });
        },
        [mealType]
    );

    const [meals, setMeals] = useState<Array<MealAlimentInterface>>([]);

    useEffect(() => {
        getDocs(collection(db, "meals")).then((res) => {
            const todayDate = timeToday();
            const mealsData = res.docs
                // @ts-ignore
                .map<MealInterface>((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                .filter(
                    (meal) =>
                        meal.mealType === mealType && meal.date === todayDate
                );
            // @ts-ignore
            const alimentsIds = new Set(
                mealsData.map((meal) => meal.alimentId)
            );
            getDocs(collection(db, "aliments")).then((responseAliments) => {
                // @ts-ignore
                const aliments: Array<dataAlimentInterface> =
                    responseAliments.docs
                        .filter((aliment) => alimentsIds.has(aliment.id))
                        .map((doc) => ({ ...doc.data(), id: doc.id }));

                const mealAliments = mealsData.map<MealAlimentInterface>(
                    (meal) => ({
                        ...meal,
                        aliment: aliments.find(
                            (aliment) => aliment.id === meal.alimentId
                        )!,
                    })
                );
                setMeals(mealAliments);
            });
        });
    }, []);

    return (
        <div className={MealStyle[mealType]}>
            <button
                onClick={() => setIsActive(!isActive)}
                className={style.button}
            >
                {MealTitle[mealType]}
            </button>
            {isActive && (
                <div className={style.meal}>
                    <AddMeals onAddedMeal={handleAddedMeal} />
                    <TotalGlucide meals={meals} />
                    <MealsSummary meals={meals} />
                    <FormInsulineRapide meals={meals} mealType={mealType} />
                </div>
            )}
        </div>
    );
};

export default Meal;
