import { Form } from "@/components/form";
import { Input } from "@/components/Input";
import { Submit } from "@/components/submit";
import { addUserAction } from "@/actions";

export async function UserForm() {
  return (
    <>
      <Form action={addUserAction}>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <input type="hidden" name="url" value="/simple-server-action" />
        <Submit>Submit</Submit>
      </Form>
    </>
  );
}
