import React from "react";
import style from "./style.module.css";

const AdminName = ({ user }: any) => {
    return (
        <>
            {user && (
                <h5 className={style.adminIndicator}>
                    Admin <span>{user?.displayName[0]}</span>
                </h5>
            )}
        </>
    );
};

export default AdminName;
