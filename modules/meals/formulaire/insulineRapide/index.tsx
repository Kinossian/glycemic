import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from "react";
import style from "./style.module.css";
import { MealAlimentInterface } from "../../card/index";
import timeToday from "../../../../utils/time/today";
import { MealType } from "../../meal";
import mathDotRound from "../../../../utils/math/dot-round";
import { doAddDocAliment } from "../../../../utils/firebase/firebase.methode";
import {
    doc,
    getDoc,
    updateDoc,
    collection,
    getDocs,
} from "firebase/firestore";
import { db } from "../../../../utils/firebase/firebase.config";

const calculateInsuline = (meals: Array<MealAlimentInterface>) => {
    const totalInsuline = meals.reduce((total, meal) => {
        const glucide =
            (meal.aliment.glucide / meal.aliment.gramme) * meal.gramme;
        return total + glucide * 0.42;
    }, 0);
    return mathDotRound(totalInsuline, 2);
};

const FormInsulineRapide: FunctionComponent<{
    meals: Array<MealAlimentInterface>;
    mealType: MealType;
}> = ({ meals, mealType }) => {
    const [insuline, setInsuline] = useState(0);

    useEffect(() => {
        setInsuline(calculateInsuline(meals));
    }, [meals]);

    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInsuline(Number(e.target.value));
        },
        []
    );

    const handleOnReset = useCallback(
        () => setInsuline(calculateInsuline(meals)),
        []
    );

    const handleOnSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const addInsuline = {
                insuline,
                date: timeToday(),
                mealType,
            };

            doAddDocAliment("insulineRapide", addInsuline);
        },
        [insuline, mealType]
    );

    return (
        <div>
            <form
                className={style.insulineLenteContainer}
                onSubmit={handleOnSubmit}
            >
                <label htmlFor={style.IL}>Insuline Rapide : </label>
                <div>
                    <input
                        id={style.IL}
                        value={insuline}
                        type="number"
                        placeholder="IR"
                        onChange={handleOnChange}
                    />
                    <input type="submit" value="ADD" />
                    <input type="reset" value="Reset" onClick={handleOnReset} />
                </div>
            </form>
        </div>
    );
};

export default FormInsulineRapide;
