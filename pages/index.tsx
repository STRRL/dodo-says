
import { Avatar, Badge } from "@fluentui/react-components";
import { Body1, Caption1, Button } from "@fluentui/react-components";
import { Card, CardFooter, CardHeader, CardPreview } from "@fluentui/react-components/unstable";
import { ArrowReplyRegular, ShareRegular } from '@fluentui/react-icons';
import { tokens } from '@fluentui/react-theme';

export default function Home() {
  return (
    <main>
      <div className='flex px-8 py-2'>
        <div className='flex flex-col flex-initial px-2 h-full' style={
          { backgroundColor: tokens.colorNeutralBackground4 }
        }>
          <Avatar className='m-2' shape='square' active="unset" name="Rooster 1" />
          <Avatar className='m-2' shape='square' active="active" name="Rooster 2" />
          <Avatar className='m-2' shape='square' active="unset" name="Rooster 3" />
          <Avatar className='m-2' shape='square' active="unset" name="Rooster 4" />
          <Avatar className='m-2' shape='square' active="unset" name="Plus" />
        </div>
        <div className='flex-1 p-2'>
          <p className='text-2xl font-bold p-2'>Threads</p>
          <div className='py-4'>
            <Card className='w-full' size='large'>
              <CardHeader
                header={
                  <Body1>
                    <b>Elvia Atkins</b> mentioned you
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
          <div className='py-4'>
            <Card className='w-full' size='large'>
              <CardHeader
                header={
                  <Body1>
                    <b>Elvia Atkins</b> mentioned you
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
      </div>
    </main>
  )
}
