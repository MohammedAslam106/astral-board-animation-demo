import TableAndChairCanvas from "@/components/canvases/TableAndChair";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full h-screen bg-[#cdcdcd] ">
      <TableAndChairCanvas/>

      {/* <Link href={'/table-chair'}>
        Table-Chair
      </Link> */}
    </main>
  );
}
