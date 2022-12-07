import React, { useState } from "react";
import { doAddDocAliment } from "../../../utils/firebase/firebase.methode";
import { dataAlimentInterface } from "../interface";
import style from "./style.module.css";

const AddAliments = () => {
    const [inputName, setInputName] = useState("");
    const [inputGramme, setInputGramme] = useState("100");
    const [inputKcal, setInputKcal] = useState("");
    const [inputLipide, setInputLipide] = useState("");
    const [inputGlucide, setInputGlucide] = useState("");
    const [inputFibres, setInputFibres] = useState("");
    const [inputProteine, setInputProteine] = useState("");

    async function handleAddAliment(e: any) {
        e.preventDefault();

        const data: Omit<dataAlimentInterface, "id"> = {
            name: inputName,
            gramme: Number(inputGramme),
            kcal: Number(inputKcal),
            lipide: Number(inputLipide),
            glucide: Number(inputGlucide),
            fibres: Number(inputFibres),
            proteine: Number(inputProteine),
        };

        await doAddDocAliment("aliments", data);

        console.log(data);
        setInputName("");
        setInputGramme("100");
        setInputKcal("");
        setInputLipide("");
        setInputGlucide("");
        setInputFibres("");
        setInputProteine("");
    }

    return (
        <div className={style.addAliment}>
            <p>Entrer les informations de de l'aliment à ajouter.</p>
            <form onSubmit={(e) => handleAddAliment(e)}>
                <div className={style.addAlimentHeader}>
                    <div className={style.macroInputContainer}>
                        <input
                            onChange={(e) => setInputName(e.target.value)}
                            value={inputName}
                            type="text"
                            placeholder="Nom de l'aliment.."
                        />
                    </div>
                    <div className={style.macroInputContainer}>
                        <label htmlFor="gr">Grammes</label>
                        <input
                            required
                            onChange={(e) => setInputGramme(e.target.value)}
                            value={inputGramme}
                            id="gr"
                            type="number"
                            placeholder="Portion en gramme.."
                            min={1}
                        />
                    </div>
                    <div className={style.macroInputContainer}>
                        <label htmlFor="glucide">Glucide</label>
                        <input
                            required
                            min={0}
                            onChange={(e) => setInputGlucide(e.target.value)}
                            value={inputGlucide}
                            id="glucide"
                            type="number"
                            placeholder="..."
                        />
                    </div>
                </div>
                <div className={style.macroContainer}>
                    <div className={style.macroInputContainer}>
                        <label htmlFor="kcal">Kcal</label>
                        <input
                            onChange={(e) => setInputKcal(e.target.value)}
                            value={inputKcal}
                            id="kcal"
                            type="number"
                            placeholder="..."
                        />
                    </div>
                    <div className={style.macroInputContainer}>
                        <label htmlFor="lipide">Lipide</label>
                        <input
                            onChange={(e) => setInputLipide(e.target.value)}
                            value={inputLipide}
                            id="lipide"
                            type="number"
                            placeholder="..."
                        />
                    </div>
                    <div className={style.macroInputContainer}>
                        <label htmlFor="fibres">Fibres</label>
                        <input
                            onChange={(e) => setInputFibres(e.target.value)}
                            value={inputFibres}
                            id="fibres"
                            type="number"
                            placeholder="..."
                        />
                    </div>
                    <div className={style.macroInputContainer}>
                        <label htmlFor="proteine">Proteine</label>
                        <input
                            onChange={(e) => setInputProteine(e.target.value)}
                            value={inputProteine}
                            id="proteine"
                            type="number"
                            placeholder="..."
                        />
                    </div>

                    <input
                        className={style.submit}
                        type="submit"
                        value="Ajouter"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddAliments;
