import { NextPage } from "next";
import AlimentsNav from "../../modules/aliments/nav";
import AlimentNav from "../../modules/aliments/nav";

const Aliments: NextPage = ({ user }: any) => {
    return (
        <>
            {user && (
                <div>
                    <AlimentsNav />
                </div>
            )}
        </>
    );
};

export default Aliments;
