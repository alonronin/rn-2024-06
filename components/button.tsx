import { ComponentProps } from "react";

export function Button({
  type = "submit",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className="bg-white rounded hover:bg-gray-300 text-black px-4 py-2 disabled:bg-gray-500 disabled:text-gray-600"
      {...props}
    />
  );
}
