import InvestmentTable from "@/components/Table/InvestmentTable";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <>
      <header className={`lg:p-4 md:p-10 sm:p-5 !pb-0`}>
        <Tabs />
      </header>
      <InvestmentTable />
    </>
  );
}
