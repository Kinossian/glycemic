import Link from "next/link";
import style from "./style.module.css";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

type LayoutActionsProps = {};

const LayoutActions: FunctionComponent<LayoutActionsProps> = () => {
    const router = useRouter();

    return (
        <div className={style.button_page_container}>
            <Link href="/aliments">
                <a
                    className={`${style.buttonLink} ${
                        router.pathname == "/aliments" ? style.isActive : ""
                    } `}
                >
                    ADD ALIMENT
                </a>
            </Link>

            <Link href="/meals">
                <a
                    className={`${style.buttonLink} ${
                        router.pathname == "/meals" ? style.isActive : ""
                    } `}
                >
                    ADD MEALS
                </a>
            </Link>

            <Link href="/stats">
                <a
                    className={`${style.buttonLink} ${
                        router.pathname == "/stats" ? style.isActive : ""
                    } `}
                >
                    STATS DAY
                </a>
            </Link>
        </div>
    );
};

export default LayoutActions;
