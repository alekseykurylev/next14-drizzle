import { db } from "@/db";
import { catalogProcedure } from "@/db/migrations/schema";
import { eq } from "drizzle-orm";

export default async function Page({ params }: { params: { id: number } }) {
  const data = await db.query.catalogProcedure.findFirst({
    where: eq(catalogProcedure.id, params.id),
  });

  console.log(data);

  return (
    <main className="max-w-7xl my-5 mx-auto px-3">
      <div className=" relative  overflow-hidden ">
        <div>{data?.id}</div>
        <div>{data?.statusId}</div>
        <div>{data?.typeId}</div>
        <div>{data?.name}</div>
        <div>{data?.registrationNumber}</div>
        <div>{data?.publicationDatetime}</div>
        <div>{data?.modificationDatetime}</div>
        <div>{data?.placerFullName}</div>
        <div>{data?.placerInn}</div>
        <div>{data?.placerKpp}</div>
        <div>{data?.placerOgrn}</div>
        <div>{data?.placerRole}</div>
        <div>{data?.urlVsrz}</div>
        <div>{data?.guid}</div>
        <div>{data?.guid}</div>
        <div>{data?.guid}</div>
        ....
      </div>
    </main>
  );
}
