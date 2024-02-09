import { db } from "@/db";
import { users } from "@/db/migrations/schema";
import { eq } from "drizzle-orm";

export default async function Page({ params }: { params: { id: number } }) {
  const data = await db.query.users.findFirst({
    where: eq(users.id, params.id),
  });

  return (
    <main>
      <div>{data?.id}</div>
      <div>{data?.name}</div>
      <div>{data?.email}</div>
    </main>
  );
}
