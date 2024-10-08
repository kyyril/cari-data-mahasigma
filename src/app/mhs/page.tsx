import LoadingListMhs from "@/components/Loading";
import MhsList from "@/components/MhsList";
import { InputWithButton } from "@/components/SearchInput";
import { baseUrl } from "@/lib/fetching";
import { Suspense } from "react";

async function fetchMhs(query: string) {
  const url = new URL(
    `${baseUrl}/hit_mhs/${
      query ? query : "khairil rahman hakiki informasi jamal wahyu"
    }`
  );
  url.searchParams.set("maxResults", "10");

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch Mhs: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Mhs data:", error);
    return null;
  }
}

export default async function Mhss({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const dataMhs = await fetchMhs(searchParams.query);
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-16">
      <section className="w-full max-w-3xl flex justify-center items-center flex-col">
        <p className="m-2 text-center font-sans font-semibold">
          Mencari data Mahasigma dari berbagai perguruan tinggi di Indonesia.
        </p>
        <InputWithButton />
        <Suspense fallback={<LoadingListMhs />}>
          <MhsList dataMhs={dataMhs} />
        </Suspense>
      </section>
    </main>
  );
}
