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
