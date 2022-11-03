import { useRouter } from "next/router";
import { useEffect } from "react";

const Roost = () => {
    const router = useRouter();
    useEffect(() => {
        router.push(`/roost/${router.query["roost-id"]}/thread`);
    })
    return (<></>)
}

export default Roost
