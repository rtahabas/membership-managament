import InvestmentTable from "@/components/Table/InvestmentTable";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <>
      <header className={`lg:p-20 !pb-0 `}>
        <Tabs />
      </header>
      <InvestmentTable />
    </>
  );
}
