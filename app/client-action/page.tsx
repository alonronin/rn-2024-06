import { UserForm } from "./form";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-20">
      <h1 className="text-4xl font-bold">Client Action!</h1>

      <UserForm />
    </main>
  );
}
