import { Likes } from "@/components/likes";

export default async function Page() {
  const likes = await fetch(
    `${process.env.API_URL}/likes?url=/non-form-server-action`,
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());
  return <Likes likes={likes} />;
}
