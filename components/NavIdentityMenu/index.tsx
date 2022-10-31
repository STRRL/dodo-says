import { MenuItem, MenuList } from "@fluentui/react-components"
import { SignOut24Regular, Settings24Regular } from "@fluentui/react-icons"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"

const NavIdentityMenu = () => {
    const router = useRouter()
    return (
        <MenuList>
            <MenuItem icon={<Settings24Regular /> }   onClick={
                ()=>{
                    router.push('/settings')
                }
            }>Settings</MenuItem>
            <MenuItem icon={<SignOut24Regular />} onClick={
                () => signOut()
            }>Logout</MenuItem>
        </MenuList>
    )
}

export default NavIdentityMenu
