import { UserForm } from "./form";
import { deleteUserAction } from "@/actions";
import { Likes } from "@/components/likes";

export default async function Home() {
  const users = await fetch(`${process.env.API_URL}/users`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const likes = await fetch(
    `${process.env.API_URL}/likes?url=/simple-server-action`,
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());

  return (
    <main className="flex flex-col gap-4 p-24">
      <h1 className="text-4xl font-bold flex gap-4 items-center">
        Simple Server Action! <Likes likes={likes} />
      </h1>

      <h2 className="text-2xl font-bold">Users</h2>

      <form>
        <ul className="flex flex-col gap-4">
          {users.map((user: { id: string; name: string; email: string }) => {
            const action = deleteUserAction.bind(null, user.id);
            return (
              <li key={user.id} className="flex gap-4 items-center">
                <button
                  formAction={action}
                  className="font-bold bg-red-100 hover:bg-red-200 text-red-800 border-red-800 rounded px-4 py-2"
                >
                  X
                </button>
                {user.name} ({user.email})
              </li>
            );
          })}
        </ul>
      </form>

      <UserForm />
    </main>
  );
}
