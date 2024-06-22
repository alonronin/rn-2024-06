"use client";

import { Form } from "@/components/form";
import { Input } from "@/components/Input";
import { Submit } from "@/components/submit";
import { addUserValidationAction } from "@/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function UserForm() {
  const router = useRouter();

  const [state, formAction] = useFormState(addUserValidationAction, {});

  useEffect(() => {
    if (state.success) {
      router.refresh();
    }
  }, [state.success]);

  return (
    <Form action={formAction}>
      {state.errors && (
        <div className="p-4 border rounded bg-red-300 border-red-800 text-red-800 flex flex-col gap-4">
          {Object.values(state.errors).map((error) => (
            <p key="error">{error as string}</p>
          ))}
        </div>
      )}
      <Input name="name" type="text" placeholder="Name" />
      <Input name="email" type="email" placeholder="Email" />
      <input type="hidden" name="url" value="/server-action-client-form" />

      <Submit>Submit</Submit>
    </Form>
  );
}
