import InvestmentTable from "@/components/Table/InvestmentTable";
import Tabs from "@/components/Tabs";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className={`lg:p-4 md:p-10 sm:p-5 !pb-0  ${inter.className} font-sans`}>
        <Tabs />
      </header>
      <InvestmentTable />
    </>
  );
}
