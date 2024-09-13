import { baseUrl } from "@/consta";

async function fetchDetail(slug: string) {
  try {
    const response = await fetch(`${baseUrl}/detail_mhs/${slug}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch detail: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching detail:", error);
    return null;
  }
}

export default async function detailMhs({
  params,
}: {
  params: { slug: string };
}) {
  const detailMhs = await fetchDetail(params.slug);

  if (!detailMhs) {
    return <p>Error loading details. Please try again later.</p>;
  }

  return (
    <div>
      <h1>Detail Mahasiswa</h1>
      <pre>{JSON.stringify(detailMhs, null, 2)}</pre>
      {/* Here you can render the detailed data as needed */}
    </div>
  );
}
