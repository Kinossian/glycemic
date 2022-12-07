import React from "react";
import {doDeleteDoc} from "../../../../utils/firebase/firebase.methode";
import style from "./style.module.css";

const AlimentsDelete = ({alimentId}: any) => {
  async function handleDelete() {
    await doDeleteDoc(alimentId);
  }

  return (
    <>
      <button className={style.buttonSupp} onClick={() => handleDelete()}>
        Supp
      </button>
    </>
  );
};

export default AlimentsDelete;
