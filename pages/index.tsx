import { Display } from "@fluentui/react-components";
import Link from "next/link";
import useIdentity from "store/identity";

export default function Home() {

  const identity = useIdentity(state => state.identity);

  if (identity) {
    return (
      <main className="m-20">
        <Display block>Welcome, {identity.name}.</Display>
        <Display block>Let&apos;s see <Link href={'/roost'} className="underline">roosts</Link>  you lived.</Display>
      </main>
    )
  }
  return (
    <main className="m-20">
      <Display block>Welcome Guest.</Display>
      <Display block>Please Login to continue.</Display>
    </main>
  )

}
