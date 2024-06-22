import { ComponentProps } from "react";

export function Input({ type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className="bg-black text-white px-4 py-2 rounded border border-white"
      {...props}
    />
  );
}
