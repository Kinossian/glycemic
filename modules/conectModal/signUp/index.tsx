import React, { useState } from "react";
import style from "./style.module.css";
import { SignInt2 } from "../interface";
import { doCreateUserWithEmailAndPassword } from "../../../utils/firebase/firebase.methode";

const ConectModalSignUp = () => {
    const [pseudoInput, setPseudoInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();

        const data: SignInt2 = {
            email: emailInput,
            password: passwordInput,
            pseudo: pseudoInput,
        };
        console.log(data);

        try {
            await doCreateUserWithEmailAndPassword(
                data.email,
                data.password,
                data.pseudo
            );
        } catch (err) {
            console.log(err);
        }

        setPseudoInput("");
        setEmailInput("");
        setPasswordInput("");
    }

    return (
        <div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className={style.signUpContainer}
            >
                <p className={style.information}>Crée toi un compte</p>
                <input
                    onChange={(e) => setPseudoInput(e.target.value)}
                    value={pseudoInput}
                    type="text"
                    placeholder="Pseudo"
                />
                <input
                    onChange={(e) => setEmailInput(e.target.value)}
                    value={emailInput}
                    type="email"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setPasswordInput(e.target.value)}
                    value={passwordInput}
                    type="password"
                    placeholder="Password"
                />
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default ConectModalSignUp;
