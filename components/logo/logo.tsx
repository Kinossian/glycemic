import style from "./style.module.css";

const Logo = () => {
    return (
        <div className={style.logoContainer}>
            <h1 className={style.logo}>
                G<span>lycemic</span>
            </h1>
        </div>
    );
};

export default Logo;
