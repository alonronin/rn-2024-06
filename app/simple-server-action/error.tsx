"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="bg-red-500 text-white px-4 py-2 rounded">
      {error.message}
    </div>
  );
}
