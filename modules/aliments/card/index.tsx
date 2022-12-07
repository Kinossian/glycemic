import React, { useState } from "react";
import ButtonSuppAliment from "../button/supprimer";

import style from "./style.module.css";

const AlimentsCard = ({ aliment }: any) => {
    const [macroIsActive, setMacroIsActive] = useState(false);

    return (
        <li className={style.alimentCard}>
            <div className={style.alimentCardHeader}>
                <h4>{aliment.name}</h4>
                <div className={style.alimentCardButton}>
                    <button onClick={() => setMacroIsActive(!macroIsActive)}>
                        {">>"}
                    </button>
                    <ButtonSuppAliment alimentId={aliment.id} />
                </div>
            </div>
            {macroIsActive && (
                <div className={style.alimentCardMacroContainer}>
                    <div
                        id={style.containerOne}
                        className={style.macroContainer}
                    >
                        <p>Valeur pour</p>
                        <p>{aliment.gramme} gr</p>
                    </div>
                    <div className={style.macroContainer}>
                        <p>{aliment.kcal}</p>
                        <p>kcal</p>
                    </div>
                    <div className={style.macroContainer}>
                        <p>{aliment.lipide}</p>
                        <p>lipide</p>
                    </div>
                    <div className={style.macroContainer}>
                        <p>{aliment.glucide}</p>
                        <p>Glucide</p>
                    </div>
                    <div className={style.macroContainer}>
                        <p>{aliment.fibres}</p>
                        <p>Fibres</p>
                    </div>
                    <div
                        id={style.containerLast}
                        className={style.macroContainer}
                    >
                        <p>{aliment.proteine}</p>
                        <p>Proteine</p>
                    </div>
                </div>
            )}
        </li>
    );
};

export default AlimentsCard;
