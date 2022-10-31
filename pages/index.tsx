import { Display } from "@fluentui/react-components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-20">
      <Display>Welcome. Let&apos;s see <Link href={'/roost'}>roosts you lived.</Link></Display>
    </main>
  )
}
