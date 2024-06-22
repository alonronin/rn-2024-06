"use client";

import { Form } from "@/components/form";
import { Input } from "@/components/Input";
import { Submit } from "@/components/submit";
import { addUserAction } from "@/actions";

export function UserForm() {
  return (
    <Form action={addUserAction}>
      <Input name="name" type="text" placeholder="Name" />
      <Input name="email" type="email" placeholder="Email" />
      <input type="hidden" name="url" value="/server-action-client-form" />

      <Submit>Submit</Submit>
    </Form>
  );
}
