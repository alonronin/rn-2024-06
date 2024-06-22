"use client";

import { Form } from "@/components/form";
import { Input } from "@/components/Input";
import { Button } from "@/components/button";

export function UserForm() {
  async function handleSubmit(formData: FormData) {
    console.log(Object.fromEntries(formData.entries()));
  }

  return (
    <Form action={handleSubmit}>
      <Input name="name" type="text" placeholder="Name" />
      <Input name="email" type="email" placeholder="Email" />
      <Button>Submit</Button>
    </Form>
  );
}
