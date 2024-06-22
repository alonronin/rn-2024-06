"use client";

import { Button } from "@/components/button";
import { addLike } from "@/actions";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

export function Likes({ likes }: { likes: any[] }) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  return (
    <Button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(async () => await addLike(pathname))}
    >
      Likes {likes.length}
    </Button>
  );
}
