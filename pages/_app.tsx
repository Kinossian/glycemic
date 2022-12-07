import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase/firebase.config";
import Layout from "../modules/layout";
import MetaData from "../components/metaData";

function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser);
        });
    }, []);

    return (
        <>
            <MetaData />
            <Layout user={user}>
                <Component user={user} {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
