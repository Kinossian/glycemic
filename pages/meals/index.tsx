import {NextPage} from "next";
import MealsDayDate from "../../modules/meals/dayDate";
import FormInsulineLente from "../../modules/meals/formulaire/insulineLente";
import Meal, {MealType} from "../../modules/meals/meal";
import style from "./style.module.css";
import {doAddDocAliment} from "../../utils/firebase/firebase.methode";
import timeToday from "../../utils/time/today";

const Meals: NextPage = ({user}: any) => {
    function handleAddedMeal(addedMeal: any) {
        const date = timeToday();

        const data = {
            alimentId: addedMeal.meal.id,
            date: date,
            gramme: addedMeal.gramme,
            mealType: addedMeal.mealType,
        };
        doAddDocAliment("meals", data);
        console.log(addedMeal);
    }
    return (
        <>
            {user && (
                <div className={style.mealsContainer}>
                    <MealsDayDate />
                    <Meal
                        onAddedMeal={handleAddedMeal}
                        mealType={MealType.BREAKFAST}
                    />
                    <Meal
                        onAddedMeal={handleAddedMeal}
                        mealType={MealType.LUNCH}
                    />
                    <Meal
                        onAddedMeal={handleAddedMeal}
                        mealType={MealType.SNACK}
                    />
                    <Meal
                        onAddedMeal={handleAddedMeal}
                        mealType={MealType.DINER}
                    />
                    <FormInsulineLente />
                </div>
            )}
        </>
    );
};

export default Meals;
