import { ComponentProps } from "react";

export function Title(props: ComponentProps<"h1">) {
  return <h1 className="text-4xl font-bold text-balance" {...props} />;
}
