export default function DetailMhs({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return <h1>Mhs {params.slug}</h1>;
}
