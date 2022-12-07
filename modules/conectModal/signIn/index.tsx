import React, { useCallback, useState } from "react";
import style from "./style.module.css";
import { SignInInterface } from "../interface";
import { doSignInWithEmailAndPassword } from "../../../utils/firebase/firebase.methode";

const ConectModalSignIn = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = useCallback(
        async (e: any) => {
            e.preventDefault();

            const data: SignInInterface = {
                email: emailInput,
                password: passwordInput,
            };
            console.log(data);
            try {
                await doSignInWithEmailAndPassword(data.email, data.password);
                setEmailInput("");
                setPasswordInput("");
            } catch (err) {
                setError(true);
                console.log(err);
            }
        },
        [emailInput, passwordInput]
    );
    return (
        <div>
            <form onSubmit={handleSubmit} className={style.signInContainer}>
                <p className={style.information}>Conecte toi</p>
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
                <p className={style.error}>
                    {error && "Email ou Password incorrect !"}
                </p>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default ConectModalSignIn;
