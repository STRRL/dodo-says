import { Body1, Caption1, Badge, Button } from "@fluentui/react-components";
import { Card, CardHeader, CardPreview, CardFooter } from "@fluentui/react-components/unstable";
import { ArrowReplyRegular, ShareRegular, Add24Regular } from '@fluentui/react-icons';
import { useRouter } from "next/router";
import { ReactElement } from "react";
import RoostLayout from "../../layout";

const RoostThread=()=>{
    const router = useRouter();
    return (
        <div>
        <p className='text-2xl font-bold p-2'>{`Threads > Roost ${router.query["roost-id"]} > Thread ${router.query["thread-id"]}`}</p>
        <div className='py-4'>
            <Card className='w-full' size='large'>
                <CardHeader
                    header={
                        <Body1>
                            Really? Do we need this anonymous platform?
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
    </div>
    )
}

RoostThread.getLayout = (children: ReactElement) => {
    return <RoostLayout>{children}</RoostLayout>
};

export default RoostThread
