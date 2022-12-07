import Logo from "../../components/logo";
import style from "./style.module.css";
import { doSignOut } from "../../utils/firebase/firebase.methode";
import AdminName from "../../components/adminName";
import LayoutActions from "./actions";
import { useCallback, FunctionComponent, ReactElement } from "react";
import Link from "next/link";
import ConectModalNav from "../conectModal/nav/index";
import Button from "../../components/button";

type LayoutProps = {
    user: any;
    children: ReactElement;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, user }) => {
    const handleLogout = useCallback(() => {
        doSignOut();
    }, []);

    return (
        <>
            <div className={style.header}>
                <div className={style.header_logo_admin_container}>
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                    <AdminName user={user} />
                </div>

                <>{user ? <LayoutActions /> : <ConectModalNav />}</>
            </div>

            <main>{children}</main>

            {user && (
                <div className={style.footer}>
                    <Button onClick={handleLogout}>LOGOUT</Button>
                </div>
            )}
        </>
    );
};

export default Layout;
