import { NextPage } from "next";
import style from "../styles/home.module.css";

const Home: NextPage = ({ user }: any) => {
    return (
        <>
            {user && (
                <div className={style.home}>
                    <p>Bienvenue sur</p>
                    <h1>GLYCEMIC</h1>
                </div>
            )}
        </>
    );
};

export default Home;
