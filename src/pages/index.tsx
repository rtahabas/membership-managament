import { Inter } from "next/font/google";
import InvestmentTable from "@/components/Table/InvestmentTable";
import Tabs from "@/components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-4 lg:p-20 ${inter.className}`}>
      <Tabs />
      <InvestmentTable />
    </main>
  );
}
