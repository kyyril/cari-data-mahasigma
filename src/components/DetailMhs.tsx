import React from "react";

type StatusKuliah = {
  id_smt: string;
  sks_smt: number;
  nm_stat_mhs: string;
};

type Studi = {
  kode_mk: string;
  nm_mk: string;
  sks_mk: number;
  id_smt: string;
  nilai_huruf?: string | null;
};

type DataUmum = {
  nm_pd: string;
  jk: string;
  nipd: string;
  namapt: string;
  namajenjang: string;
  namaprodi: string;
  mulai_smt: string;
  nm_jns_daftar: string;
  link_pt: string;
  link_prodi: string;
};

type DetailMhs = {
  datastatuskuliah: StatusKuliah[];
  datastudi: Studi[];
  dataumum: DataUmum;
};

interface DetailMahasiswaProps {
  detailMhs: DetailMhs;
}

const DetailMahasiswa: React.FC<DetailMahasiswaProps> = ({ detailMhs }) => {
  const { datastatuskuliah, datastudi, dataumum } = detailMhs;

  return (
    <section className="gap-6 p-6 w-full max-w-3xl flex justify-center items-center flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold  mb-4">Data Umum</h2>
        <p className="">
          <span className="font-semibold">Nama:</span> {dataumum.nm_pd}
        </p>
        <p className="">
          <span className="font-semibold">Jenis Kelamin:</span> {dataumum.jk}
        </p>
        <p className="">
          <span className="font-semibold">NIPD:</span> {dataumum.nipd}
        </p>
        <p className="">
          <span className="font-semibold">Universitas:</span>
          <a className="text-blue-500 hover:underline"> {dataumum.namapt}</a>
        </p>
        <p className="">
          <span className="font-semibold">Jenjang:</span> {dataumum.namajenjang}
        </p>
        <p className="">
          <span className="font-semibold">Program Studi:</span>
          <a className="text-blue-500 hover:underline"> {dataumum.namaprodi}</a>
        </p>
        <p className="">
          <span className="font-semibold">Mulai Semester:</span>{" "}
          {dataumum.mulai_smt}
        </p>
        <p className="">
          <span className="font-semibold">Jenis Pendaftaran:</span>{" "}
          {dataumum.nm_jns_daftar}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold  mb-4">Status Kuliah</h3>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Semester</th>
              <th className="py-2 px-4">SKS Semester</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {datastatuskuliah.map((status, index) => (
              <tr key={index} className=" border-b">
                <td className="py-2 px-4">{status.id_smt}</td>
                <td className="py-2 px-4">{status.sks_smt}</td>
                <td className="py-2 px-4">{status.nm_stat_mhs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-xl font-bold  mb-4">Data Studi</h3>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">No</th>
              <th className="py-2 px-4">Nama Matkul</th>
              <th className="py-2 px-4">SKS</th>
              <th className="py-2 px-4">Semester</th>
            </tr>
          </thead>
          <tbody>
            {datastudi.map((studi, index) => (
              <tr key={index} className=" border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{studi.nm_mk}</td>
                <td className="py-2 px-4">{studi.sks_mk}</td>
                <td className="py-2 px-4">{studi.id_smt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DetailMahasiswa;
