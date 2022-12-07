import React, { useState } from "react";
import style from "./style.module.css";
import ConectModalSignUp from "../signUp/index";
import ConectModalSignIn from "../signIn/index";

const ConectModalNav = () => {
    const [signUp, setSignUp] = useState(false);
    return (
        <div className={style.conectModalContainer}>
            <div className={style.buttonContainer}>
                <button
                    className={`${signUp && style.isActive}`}
                    onClick={() => setSignUp(true)}
                >
                    SignUp
                </button>
                <button
                    className={`${signUp ? "" : style.isActive}`}
                    onClick={() => setSignUp(false)}
                >
                    SignIn
                </button>
            </div>
            {signUp ? <ConectModalSignUp /> : <ConectModalSignIn />}
        </div>
    );
};

export default ConectModalNav;
