import Link from "next/link";
import { redirect } from "next/navigation";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { catalogProcedure } from "@/db/migrations/schema";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default async function Home({ searchParams }: SearchParamsProps) {
  const pageNumber = Number(searchParams.page ?? 1);

  const numberOfItems = 10;

  const totalProducts = await db
    .select({ count: sql<number>`count(*)` })
    .from(catalogProcedure);
  // .where(eq(wpPosts.postType, "product"));

  const numberOfPages = Math.ceil(totalProducts[0].count / numberOfItems);

  let safePageNumber = 1;

  if (pageNumber < 1) {
    redirect("/");
  } else if (pageNumber > numberOfPages) {
    redirect("/");
  } else {
    safePageNumber = pageNumber;
  }

  const offsetItems =
    safePageNumber > 1 ? (safePageNumber - 1) * numberOfItems : 0;

  const products = await db
    .select()
    .from(catalogProcedure)
    // .where(eq(wpPosts.postType, "product"))
    .limit(10)
    .offset(offsetItems);

  const prevSearchParams = new URLSearchParams();
  const nextSearchParams = new URLSearchParams();

  if (safePageNumber > 2) {
    prevSearchParams.set("page", `${safePageNumber - 1}`);
  } else {
    prevSearchParams.delete("page");
  }

  if (safePageNumber > 0) {
    if (safePageNumber === numberOfPages) {
      nextSearchParams.set("page", `${numberOfPages}`);
    } else {
      nextSearchParams.set("page", `${safePageNumber + 1}`);
    }
  } else {
    nextSearchParams.delete("page");
  }

  return (
    <main className="my-10 mx-auto px-10">
      <div className="relative overflow-hidden ">
        <div>Всего: {totalProducts[0].count}</div>
        <table className=" border-2 rounded-xl border-slate-700 table-fixed w-full text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-slate-700  font-medium p-4 pl-8 pb-3 text-left w-20">
                Тип
              </th>
              <th className="border-b-2 border-slate-700 font-medium p-4 pl-8  pb-3 text-left">
                № извещения
              </th>
              <th className="border-b-2 border-slate-700 font-medium p-4 pl-8  pb-3 text-left">
                Наименование
              </th>
              <th className="border-b-2 border-slate-700 font-medium p-4 pl-8  pb-3 text-left">
                Заказчик
              </th>

              <th className="border-b-2 border-slate-700 font-medium p-4 pl-8  pb-3 text-left">
                Дата публикации
              </th>
              <th className="border-b-2 border-slate-700 font-medium p-4 pl-8  pb-3 text-left">
                Завершение подачи
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border-b border-slate-700  p-4 pl-8 ">
                  {product.type}
                </td>
                <td className="border-b border-slate-700  p-4 pl-8  ">
                  {product.registrationNumber}
                </td>
                <td className="border-b border-slate-700  p-4 pl-8 ">
                  <Link
                    href={`/${String(product.id)}`}
                    style={{ textDecoration: "underline" }}
                  >
                    {product.name}
                  </Link>
                </td>
                <td className="border-b border-slate-700  p-4 pl-8  ">
                  {product.placerFullName}
                </td>

                <td className="border-b border-slate-700  p-4 pl-8  ">
                  {product.publicationDatetime}
                </td>
                <td className="border-b border-slate-700  p-4 pl-8  ">
                  {product.modificationDatetime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex my-5 justify-end items-center gap-5">
        <Link
          href={`/?${prevSearchParams}`}
          className={`${
            safePageNumber < 2
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          } px-5 py-2 rounded-md text-white `}
        >
          Previous
        </Link>

        <Link
          href={`/?${nextSearchParams}`}
          className={`${
            safePageNumber >= numberOfPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          } px-5 py-2 rounded-md text-white `}
        >
          Next
        </Link>
      </div>
    </main>
  );
}
