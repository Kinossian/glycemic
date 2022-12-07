import Head from "next/head";
import React from "react";

const MetaData = ({ title, description }: any) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};

MetaData.defaultProps = {
    title: "Glycemic",
    description: "Glycemic, l'application pour t'aider a gérer ton diabète",
};

export default MetaData;
