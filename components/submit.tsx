"use client";

import { Button } from "@/components/button";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export function Submit(props: ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();
  return <Button disabled={pending} {...props} />;
}
