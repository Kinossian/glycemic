import { FunctionComponent } from "react";
import MealCard from "../card";
import { MealAlimentInterface } from "../card/";
import style from "./style.module.css";

const MealsSummary: FunctionComponent<{
    meals: Array<MealAlimentInterface>;
}> = ({ meals }) => {
    return (
        <>
            {meals.length === 0 ? (
                <p className={style.info}>Aucun meals ajouter</p>
            ) : (
                <div className={style.summaryContainer}>
                    {meals.map((meal: any) => (
                        <MealCard meal={meal} />
                    ))}
                </div>
            )}
        </>
    );
};

export default MealsSummary;
