import { MealType } from "./meal";

export interface MealInterface {
    alimentId: string;
    date: number;
    gramme: number;
    mealType: MealType;
}
