import { Avatar, Body1, Menu, MenuPopover, MenuTrigger } from "@fluentui/react-components"
import { useSession, signIn, signOut } from "next-auth/react"
import { PersonAdd24Regular } from "@fluentui/react-icons"
import { tokens } from '@fluentui/react-theme';
import useIdentity from "store/identity";
import { useEffect } from "react";
import NavIdentityMenu from "components/NavIdentityMenu";

const NavIdentity = () => {
    const { data: session, status } = useSession()
    const identity = useIdentity(state => state.identity)
    const appendIdentity = useIdentity(state => state.appendIdentity)
    const setIdentity = useIdentity(state => state.setIdentity)
    const unsetIdentity = useIdentity(state => state.unsetIdentity)

    useEffect(() => {
        if (status === 'authenticated') {
            const loginIdentity = {
                name: session.user?.name ?? '',
                avatar: session.user?.image ?? '',
            }
            appendIdentity(loginIdentity)
            setIdentity(loginIdentity)
        } else {
            unsetIdentity()
        }
    }, [appendIdentity, unsetIdentity, setIdentity, status, session])

    if (identity) {
        return (
            <Menu>
                <MenuTrigger>
                    <div
                        className="cursor-pointer"
                    >
                        <Body1
                            className="mr-2"
                            style={{
                                color: tokens.colorBrandForeground1
                            }}
                        >
                            {identity?.name ?? ''}
                        </Body1>
                        <Avatar
                            image={{ src: identity?.avatar ?? '' }}
                            name={identity?.name ?? ''}
                        >
                        </Avatar>
                    </div>
                </MenuTrigger>
                <MenuPopover>
                    <NavIdentityMenu />
                </MenuPopover>
            </Menu>
        )
    }

    return (
        <div
            className="cursor-pointer"
            onClick={() => {
                signIn("github")
            }}
        >
            <Body1
                className="mr-2"
            >
                Login with GitHub
            </Body1>
            <Avatar
                icon={<PersonAdd24Regular />}
            />
        </div>
    )

}

export default NavIdentity
