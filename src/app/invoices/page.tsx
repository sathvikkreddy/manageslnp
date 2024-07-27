import { InvoicesReport } from "@/components/InvoicesReport";
import { CompaniesSearch } from "@/components/SearchBars";
import { Button } from "@/components/ui/button";
import { getInvoices } from "@/sampleData";
import Link from "next/link";

const invoicesPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const data = await getInvoices();
  const searchQueriedData = data.filter((invoice) =>
    invoice.invoice?.includes(searchParams?.query || invoice.invoice)
  );
  return (
    <div>
      {/* {JSON.stringify(searchQueriedData)}    */}
      <header className="flex items-center justify-between bg-background px-4 py-3 md:px-6">
        <div>
          <h1 className="md:text-xl font-bold">Invoices</h1>
        </div>
        <div className="flex-1 max-w-md">
          <CompaniesSearch />
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/invoices/new"}>
            <Button className="text-xs md:text-sm p-1 md:p-2">+ Invoice</Button>
          </Link>
        </div>
      </header>
      <InvoicesReport
        fields={["date", "company", "type", "invoice", "amount"]}
        data={searchQueriedData}
      />
    </div>
  );
};

export default invoicesPage;
