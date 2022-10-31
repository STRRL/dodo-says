import NavIdentity from "components/NavIdentity";
import Head from "next/head";
import { tokens } from '@fluentui/react-theme';
import { useRouter } from "next/router";

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    return (
        <div className='container mx-auto min-h-screen' style={
            { backgroundColor: tokens.colorNeutralBackground2 }
        }>
            <div>
                <Head>
                    <title>dodo says</title>
                    <meta name="description" content="what does dodo says" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <nav className='px-8'>
                    <div className="navbar">
                        <div className="flex-1">
                            <div className="cursor-pointer"
                                onClick={() => {
                                    router.push('/')
                                }}>
                                🦤 dodo says
                            </div>
                        </div>
                        <div className='justify-self-center'>
                            <NavIdentity />
                        </div>
                    </div>
                </nav>
                <div>{children}</div>
            </div>
        </div>
    )
}
export default Layout
