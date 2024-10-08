"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function MhsItem({ mhs }: { mhs: any }) {
  const parts = mhs.text
    .split(",")
    .map((part: string) => part.replace(/\s+/g, " ").trim());
  const nameAndNim = parts[0] || "No Name/NIM available";
  const institution = parts[1] || "Maaf, Data Tidak Ditemukan☹️";
  const program = parts[2] || "Mohon Cari Data Lainnya";
  return (
    <Link
      href={`/mhs/${mhs["website-link"].replace(
        /data_mahasiswa|[^a-z0-9]/gi,
        ""
      )}`}
    >
      <Card className="mx-2">
        <CardHeader>
          <CardTitle>{nameAndNim}</CardTitle>
          <CardDescription>{institution}</CardDescription>
          <CardDescription>{program}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
