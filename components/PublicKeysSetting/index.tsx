import { makeStyles, tokens, Divider, Title1, Button, Body1, Subtitle1, Textarea, Caption1, Avatar } from "@fluentui/react-components";
import { Card, CardFooter, CardHeader, CardPreview } from '@fluentui/react-components/unstable';
import * as React from 'react';
import { Key24Regular } from "@fluentui/react-icons"
const PublicKeysSetting = () => {
    return (
        <div>
            <div className="flex">
                <Title1 className="flex-1">
                    SSH Keys
                </Title1>
                <Button>New SSH Keys</Button>
            </div>

            <Divider appearance="strong" className="py-2" />
            <div className="flex flex-col py-4">
                <Body1 block className="py-2">
                    This is a list of SSH keys associated with your account. Remove any keys that you do not recognize.
                </Body1>
                <Subtitle1 block className="py-4">
                    SSH Public Keys
                </Subtitle1>
                <div className="py-4" >
                    <Card className="my-4">
                        <CardHeader
                            image={
                                <div className="flex flex-col items-center">
                                    <Key24Regular className="w-16 h-16" /><Caption1>SSH Key</Caption1>
                                </div>
                            }

                            description={
                                <div className="flex">
                                    <div className="flex-1">
                                        <Body1 block className="py-1">
                                            <b>strrl@giu</b> <a>(used by 2 roost)</a>
                                        </Body1>
                                        <Caption1 block>SHA256:TYMYgoxE6O+Va8OguWvVTIvftNF29lxQS6wXEQz5E4c</Caption1>
                                        <Caption1 block>Added on May 13, 2021</Caption1>
                                        <Caption1 block>Last used within the last 4 months</Caption1>
                                    </div>
                                    <div className="h-full self-center">
                                        <Button className="" appearance="secondary" disabled><a>delete</a></Button>
                                    </div>
                                </div>
                            }
                        />
                    </Card>
                    <Card className="my-4">
                        <CardHeader
                            image={
                                <div className="flex flex-col items-center">
                                    <Key24Regular className="w-16 h-16" /><Caption1>SSH Key</Caption1>
                                </div>}

                            description={
                                <div className="flex">
                                    <div className="flex-1">
                                        <Body1 block className="py-1">
                                            <b>strrl@giu</b> <a>(not in use)</a>
                                        </Body1>
                                        <Caption1 block>SHA256:TYMYgoxE6O+Va8OguWvVTIvftNF29lxQS6wXEQz5E4c</Caption1>
                                        <Caption1 block>Added on May 13, 2021</Caption1>
                                        <Caption1 block>Last used within the last 4 months</Caption1>
                                    </div>
                                    <div className="h-full self-center">
                                        <Button className="" appearance="secondary"><a>delete</a></Button>
                                    </div>
                                </div>
                            }
                        />
                    </Card>
                </div>
            </div>

            <div className="flex pt-8">
                <Title1 className="flex-1">
                    GPG Keys
                </Title1>
                <Button appearance="primary" size="small" disabled>New GPG Keys</Button>
            </div>
            <Divider appearance="strong" className="py-2" />
            <div>
                <Body1 block className="py-2">
                    GPG Keys are not supported yet.
                </Body1>
            </div>

            <div className="flex pt-12">
                <Title1 className="flex-1">
                    Ethereum Wallets
                </Title1>
                <Button appearance="primary" size="small" disabled>Connect with Wallet</Button>
            </div>
            <Divider appearance="strong" className="py-2" />
            <div>
                <Body1 block className="py-2">
                    Ethereum Wallets are not supported yet.
                </Body1>
            </div>
        </div>
    )
}
export default PublicKeysSetting
