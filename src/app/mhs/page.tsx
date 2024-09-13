import MhsList from "@/components/MhsList";
import { InputWithButton } from "@/components/SearchInput";
import { baseUrl } from "@/lib/fetching";

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
  );
}
