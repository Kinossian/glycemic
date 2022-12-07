import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/firebase/firebase.config";
import style from "./style.module.css";

const AddMeals = ({ onAddedMeal }: any) => {
    const [gramme, setGramme] = useState<number>(0);
    const [aliments, setAliments] = useState<any>([]);
    const [query, setQuery] = useState<any>("");
    const [selectedMeal, setSelectedMeal] = useState<any>(null);
    const [showChoices, setShowChoices] = useState(false);

    useEffect(() => {
        getDocs(collection(db, "aliments")).then((res) =>
            setAliments(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
    }, []);

    function handleSearch(e: any) {
        let value = e.target.value;
        setQuery(value);
        setShowChoices(value.length > 0);
    }

    function choiceMeal(aliment: any) {
        setShowChoices(false);
        setSelectedMeal(aliment);
        setQuery(aliment.name);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onAddedMeal({
            meal: selectedMeal,
            gramme,
        });
        setGramme(0);
        setQuery("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.mealForm}>
                <div>
                    <div className={style.mealFormHeader}>
                        <input
                            className={style.mealName}
                            type="text"
                            placeholder="Search Meals.."
                            onChange={handleSearch}
                            value={query}
                        />
                        <div className={style.grammesContainer}>
                            <label htmlFor={style.grammes}> Gr</label>
                            <input
                                onChange={(e) =>
                                    setGramme(Number(e.target.value))
                                }
                                value={gramme.toString()}
                                id={style.grammes}
                                type="number"
                            />
                        </div>
                    </div>
                    {showChoices &&
                        aliments
                            .filter((aliment: any) => {
                                return aliment.name
                                    .toLowerCase()
                                    .includes(query.toLowerCase());
                            })
                            .map((aliment: any) => {
                                return (
                                    <div
                                        key={aliment.id}
                                        className={style.searchResult}
                                    >
                                        <p onClick={() => choiceMeal(aliment)}>
                                            {aliment.name}
                                        </p>
                                    </div>
                                );
                            })}
                </div>
                <input
                    type="submit"
                    value="ADD"
                    disabled={!selectedMeal || !gramme}
                />
            </form>
        </div>
    );
};

export default AddMeals;
