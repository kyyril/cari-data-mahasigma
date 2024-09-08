import MhsList from "@/components/MhsList";
import { InputWithButton } from "@/components/SearchInput";
import { baseUrl } from "@/consta";

async function fetchMhs(query: string) {
  const url = new URL(`${baseUrl}/hit_mhs/${query}`);
  url.searchParams.set("maxResults", "10");

  try {
    const mhss = await fetch(url);
    return mhss.json();
  } catch (error) {
    console.error(error);
  }
}
export default async function Mhss({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const dataMhs = await fetchMhs(searchParams.query);

  return (
    <>
      <main className="w-full flex justify-center items-start min-h-screen">
        <section className="w-full max-w-3xl flex justify-center items-center flex-col">
          <h1 className="text-4xl text-center font-extrabold">
            Cari Data Mahasigma
          </h1>
          <p className="m-2 text-center font-sans">
            Mencari data Mahasiswa dari berbagai perguruan tinggi di Indonesia.
          </p>
          <InputWithButton />
          <MhsList dataMhs={dataMhs} />
        </section>
      </main>
    </>
  );
}
