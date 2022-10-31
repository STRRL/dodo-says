'use client';
import { ReactElement } from "react";
import RoostLayout from "./layout";

export type RoostProps = {
    children: React.ReactNode,
};

const Roost = () => {
    return (
        <div>
            Automatic open the first roost.
        </div>
    )
}

Roost.getLayout = (children: ReactElement) => {
    return <RoostLayout>{children}</RoostLayout>
};

export default Roost
