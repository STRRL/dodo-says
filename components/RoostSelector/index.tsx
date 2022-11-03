import { Avatar, Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle } from "@fluentui/react-components";
import { Add24Regular } from '@fluentui/react-icons';
import { tokens } from '@fluentui/react-theme';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RoostSelector = () => {
    const router = useRouter();
    const [selectedRoost, setSelectedRoost] = useState(router.query["roost-id"] as string);
    useEffect(() => {
        setSelectedRoost(router.query["roost-id"] as string);
    }, [router.query])
    const [showCreateOrJoinRoost, setShowCreateOrJoinRoost] = useState(false);
    return (<div className='flex flex-col' style={
        { backgroundColor: tokens.colorNeutralBackground4 }
    }>
        <RoostAvatar name="Roost 1" roostId="1" selectedRoost={selectedRoost} />
        <RoostAvatar name="Roost 2" roostId="2" selectedRoost={selectedRoost} />
        <RoostAvatar name="Roost 3" roostId="3" selectedRoost={selectedRoost} />
        <RoostAvatar name="Roost 4" roostId="4" selectedRoost={selectedRoost} />
        <Avatar className='cursor-pointer m-2' shape='square' active="unset" icon={<Add24Regular />}
            onClick={() => {
                setShowCreateOrJoinRoost(true);
            }}
        />

        <Dialog open={showCreateOrJoinRoost} onOpenChange={(event, data) => setShowCreateOrJoinRoost(data.open)}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Create New Roost or Join Existed Roost</DialogTitle>
                    <DialogContent>
                        <Button onClick={() => { router.push("/roost-new") }}>Create New Roost</Button>
                        <Button onClick={() => { router.push("/roost-join") }}>Join Existed Roost</Button>
                    </DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>

    </div>)
}

export default RoostSelector

interface RoostAvatarProps {
    roostId: string
    name: string
    selectedRoost: string
}

const RoostAvatar = ({ roostId, name, selectedRoost }: RoostAvatarProps) => {
    const router = useRouter();
    return (<Avatar className='cursor-pointer m-2' shape='square' active={roostId === selectedRoost ? "active" : "unset"} name={name} onClick={() => {
        router.push(`/roost/${roostId}/thread`);
    }} />
    )
}
