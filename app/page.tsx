import { Title } from "@/components/title";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Title>Let&apos;s Get Into the Action, Server Action!</Title>

      <ul className="flex flex-col gap-2">
        <li>
          <Link href={"/client-action"}>Client Action</Link>
        </li>

        <li>
          <Link href={"/simple-server-action"}>Simple Server Action</Link>
        </li>

        <li>
          <Link href={"/server-action-client-form"}>
            Server Action with Client Form
          </Link>
        </li>

        <li>
          <Link href={"/server-action-client-form-validation"}>
            Server Action with Client Form and Validation
          </Link>
        </li>

        <li>
          <Link href={"/non-form-server-action"}>Non Form Server Action</Link>
        </li>
      </ul>
    </>
  );
}
