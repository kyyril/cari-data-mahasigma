import MhsItem from "./MhsItem";
export default function MhsList({ dataMhs }: { dataMhs: any }) {
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      {dataMhs?.mahasiswa?.length ? (
        dataMhs.mahasiswa.map((mhs: any) => (
          <div key={mhs.id}>
            <MhsItem mhs={mhs} />
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}
