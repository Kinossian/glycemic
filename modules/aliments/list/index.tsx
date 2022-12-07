import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../utils/firebase/firebase.config";
import AlimentCard from "../card";
import style from "./style.module.css";

const AlimentsList = () => {
    const [aliments, setAliments] = useState<any>([]);

    useEffect(() => {
        getDocs(collection(db, "aliments")).then((res) =>
            setAliments(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
    }, []);

    return (
        <ul className={style.alimentCardContainer}>
            {aliments.length > 0 ? (
                aliments.map((aliment: any) => (
                    <AlimentCard key={aliment.id} aliment={aliment} />
                ))
            ) : (
                <div className={style.noAliment}>
                    <p>
                        Aucun Aliment
                        <br />
                        <strong> Clické sur ADD pour en ajouter</strong>
                    </p>
                </div>
            )}
        </ul>
    );
};

export default AlimentsList;
