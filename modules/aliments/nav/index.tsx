import React, {useState} from "react";
import AddAliment from "../add";
import ListAliment from "../list";
import style from "./style.module.css";

const AlimentsNav = () => {
    const [alimentNav, setAlimentNav] = useState(true);
    return (
        <div className={style.alimentContainer}>
            <ul className={style.navAliment}>
                <li
                    className={alimentNav ? style.isActive : ""}
                    onClick={() => setAlimentNav(true)}
                >
                    ADD
                </li>
                <li
                    className={alimentNav ? "" : style.isActive}
                    onClick={() => setAlimentNav(false)}
                >
                    LIST
                </li>
            </ul>
            <div>{alimentNav ? <AddAliment /> : <ListAliment />}</div>
        </div>
    );
};

export default AlimentsNav;
