import { NextPage } from "next";
import StatDay from "../../modules/statDay";

const Stats: NextPage = ({ user }: any) => {
    return (
        <>
            {user && (
                <div>
                    <StatDay />
                </div>
            )}
        </>
    );
};

export default Stats;
