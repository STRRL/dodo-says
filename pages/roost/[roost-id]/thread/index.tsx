import { Badge } from "@fluentui/react-components";
import { Body1, Caption1, Button } from "@fluentui/react-components";
import { Card, CardFooter, CardHeader, CardPreview } from "@fluentui/react-components/unstable";
import { ArrowReplyRegular, ShareRegular, Add24Regular } from '@fluentui/react-icons';
import { useRouter } from "next/router";
import { ReactElement } from "react";
import RoostLayout from "pages/roost/layout";
import Link from "next/link";

const RoostThreads = () => {

    const router = useRouter();

    return (
        <div>
            <p className='text-2xl font-bold p-2'>{`Threads > Roost ${router.query["roost-id"]}`}</p>
            <div className='py-4'>
                <Card className='w-full' size='large'>
                    <CardHeader
                        header={
                            <Body1>
                                this platform sucks
                            </Body1>
                        }
                        description={<div>
                            <Caption1 block>5h ago · About us - Overview</Caption1>
                        </div>
                        }
                    />
                    <CardPreview>
                    </CardPreview>
                    <CardFooter className='flex-wrap'>
                        <div className='basis-full'>
                            <Badge appearance="outline">🙂</Badge>
                            <Badge className='m-1' appearance="outline">👍 24</Badge>
                            <Badge className='m-1' appearance="outline">🚀 7</Badge>
                            <Badge className='m-1' appearance="filled">🤔 9</Badge>
                            <Badge className='m-1' appearance="outline">😇 13</Badge>
                        </div>
                        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
                        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className='py-4'>
                <Card className='w-full' size='large'>
                    <CardHeader
                        header={
                            <Body1>
                                <Link href={`/roost/${router.query["roost-id"]}/thread/3`}> Really? Do we need this anonymous platform?</Link>
                            </Body1>
                        }
                        description={<div>
                            <Caption1 block>5h ago · About us - Overview</Caption1>
                        </div>
                        }
                    />
                    <CardPreview>
                    </CardPreview>
                    <CardFooter className='flex-wrap'>
                        <div className='basis-full'>
                            <Badge appearance="outline">🙂</Badge>
                            <Badge className='m-1' appearance="filled">👍 24</Badge>
                            <Badge className='m-1' appearance="filled">🚀 7</Badge>
                            <Badge className='m-1' appearance="outline">🤔 9</Badge>
                            <Badge className='m-1' appearance="outline">😇 13</Badge>
                        </div>
                        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
                        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
RoostThreads.getLayout = (children: ReactElement) => {
    return <RoostLayout>{children}</RoostLayout>
};
export default RoostThreads
