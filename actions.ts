"use server";

import { redirect } from "next/navigation";

export async function deleteUserAction(id: string) {
  await fetch(`${process.env.API_URL}/users/${id}`, {
    method: "DELETE",
  });
  redirect("/simple-server-action");
}

export async function addUserAction(formData: FormData) {
  console.log(Object.fromEntries(formData.entries()));

  const name = formData.get("name");
  const email = formData.get("email");
  const url = formData.get("url");

  if (!name || !email) {
    throw new Error("Name and email are required");
  }
  await fetch(`${process.env.API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  redirect((url ?? "/") as string);
}

export async function addUserValidationAction(
  initialState: any,
  formData: FormData,
): Promise<{ success?: boolean; errors?: any }> {
  console.log(initialState);
  console.log(Object.fromEntries(formData.entries()));

  const name = formData.get("name");
  const email = formData.get("email");
  const url = formData.get("url");

  if (!name || !email) {
    return {
      errors: {
        name: !name ? "Name is required" : undefined,
        email: !email ? "Email is required" : undefined,
      },
    };
  }

  try {
    await fetch(`${process.env.API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
  } catch (error) {
    return {
      errors: {
        "server-error": error?.toString(),
      },
    };
  }

  return { success: true };
}

export async function addLike(url: string) {
  await fetch(`${process.env.API_URL}/likes`, {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  redirect(url);
}
