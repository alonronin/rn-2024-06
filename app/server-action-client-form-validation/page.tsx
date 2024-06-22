import { UserForm } from "./form";

export default async function Home() {
  const users = await fetch(`${process.env.API_URL}/users`, {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <main className="flex flex-col gap-4 p-24">
      <h1 className="text-4xl font-bold">
        Server Action with Client form and Validation!
      </h1>

      <h2 className="text-2xl font-bold">Users</h2>

      <ul>
        {users.map((user: { id: string; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

      <UserForm />
    </main>
  );
}
