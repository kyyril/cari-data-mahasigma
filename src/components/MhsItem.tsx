import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function MhsItem({ mhs }: { mhs: any }) {
  return (
    <Card className="mx-2">
      <CardHeader>
        <CardTitle>
          {mhs.text.split(",")[0].replace(/\s+/g, " ").trim()}
        </CardTitle>
        <CardDescription>
          {mhs.text.split(",")[1].replace(/\s+/g, " ").trim()}
        </CardDescription>
        <CardDescription>
          {mhs.text.split(",")[2].replace(/\s+/g, " ").trim()}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
