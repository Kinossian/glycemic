import { collection, getDocs } from "firebase/firestore";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { db } from "../../utils/firebase/firebase.config";
import timeBeginDay from "../../utils/time/begin-day";
import timeToday from "../../utils/time/today";
import { MealAlimentInterface } from "../meals/card";
import MealsSummary from "../meals/summary";
import { MealType } from "../meals/meal/index";
import style from "./style.module.css";

interface InsulineRapideInterface {
    date: number;
    insuline: number;
    mealType: MealType;
}

const StatDay = () => {
    const [currentDate, setCurrentDate] = useState(timeToday());
    const [meals, setMeals] = useState<
        Record<MealType, Array<MealAlimentInterface>>
    >({
        [MealType.BREAKFAST]: [],
        [MealType.LUNCH]: [],
        [MealType.SNACK]: [],
        [MealType.DINER]: [],
    });
    const [insulineRapide, setInsulineRapide] = useState<
        Record<MealType, number>
    >({
        [MealType.BREAKFAST]: 0,
        [MealType.LUNCH]: 0,
        [MealType.SNACK]: 0,
        [MealType.DINER]: 0,
    });

    useEffect(() => {
        getDocs(collection(db, "meals")).then((res) => {
            const mealsData = res.docs
                // @ts-ignore
                .map<MealInterface>((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                .filter((meal) => meal.date === currentDate);
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

                const mealAliments = mealsData
                    .map<MealAlimentInterface>((meal) => ({
                        ...meal,
                        aliment: aliments.find(
                            (aliment) => aliment.id === meal.alimentId
                        )!,
                    }))
                    .reduce(
                        (total, meal) => {
                            total[meal.mealType].push(meal);
                            return total;
                        },
                        {
                            [MealType.BREAKFAST]: [],
                            [MealType.LUNCH]: [],
                            [MealType.SNACK]: [],
                            [MealType.DINER]: [],
                        } as Record<MealType, Array<MealAlimentInterface>>
                    );
                setMeals(mealAliments);
            });
        });
    }, [currentDate]);

    useEffect(() => {
        getDocs(collection(db, "insulineRapide")).then((res) => {
            const insulineRapideData = res.docs
                .map<InsulineRapideInterface>(
                    // @ts-ignore
                    (doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    })
                )
                .filter((data) => data.date === currentDate)
                .reduce(
                    (total, data) => {
                        total[data.mealType] += data.insuline;
                        return total;
                    },
                    {
                        [MealType.BREAKFAST]: 0,
                        [MealType.LUNCH]: 0,
                        [MealType.SNACK]: 0,
                        [MealType.DINER]: 0,
                    } as Record<MealType, number>
                );
            setInsulineRapide(insulineRapideData);
        });
    }, [currentDate]);

    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newDate = timeBeginDay(new Date(e.target.value));
            setCurrentDate(newDate);
        },
        []
    );
    const maxDate = useMemo(() => {
        const date = new Date(timeToday());
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }, []);

    return (
        <section className={style.statDayContainer}>
            <header>
                <form>
                    <input
                        className={style.date}
                        type="date"
                        onChange={handleOnChange}
                        max={maxDate}
                    />
                </form>
            </header>
            <main>
                <div className={style.mealType}>
                    <h3>Breakfast</h3>
                    <MealsSummary meals={meals[MealType.BREAKFAST]} />
                    <p className={style.insulineRapide}>
                        Insuline Rapide:
                        <span>{insulineRapide[MealType.BREAKFAST]}</span>
                    </p>
                </div>
                <div className={style.mealType}>
                    <h3>Lunch</h3>
                    <MealsSummary meals={meals[MealType.LUNCH]} />
                    <p className={style.insulineRapide}>
                        Insuline Rapide:
                        <span> {insulineRapide[MealType.LUNCH]}</span>
                    </p>
                </div>
                <div className={style.mealType}>
                    <h3>Snack</h3>
                    <MealsSummary meals={meals[MealType.SNACK]} />
                    <p className={style.insulineRapide}>
                        Insuline Rapide:
                        <span>{insulineRapide[MealType.SNACK]}</span>
                    </p>
                </div>
                <div className={style.mealType}>
                    <h3>Diner</h3>
                    <MealsSummary meals={meals[MealType.DINER]} />
                    <p className={style.insulineRapide}>
                        Insuline Rapide:
                        <span>{insulineRapide[MealType.DINER]}</span>
                    </p>
                </div>
            </main>
        </section>
    );
};

export default StatDay;
