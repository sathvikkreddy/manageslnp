import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  PencilIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { companyReportData, getCompanyReport } from "@/sampleData";
import { Report } from "@/components/report";
import { CompanyReport } from "@/components/CompanyReport";
import { PaginationButton } from "@/components/PaginationButton";
import { EditButton } from "@/components/EditButton";
import Link from "next/link";

const CompanyPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const companyId = params.id;
  const page = Number(searchParams?.page || "1");

  const company = {
    id: companyId,
    name: "Company ABC",
    GSTIN: "27AAACT1234A1Z5",
    dueInvoice: "ffmp/2024-25/69",
    totalDue: 342220,
    // other company details...
  };

  const fields = ["date", "type", "invoice", "amount", "closingBalance"];

  const reportData = await getCompanyReport(page);

  return (
    <div>
      <header className="flex md:flex-row flex-col items-center justify-between bg-background px-4 py-3 md:px-6">
        <div>
          <CardTitle className="md:text-xl font-bold">{company.name}</CardTitle>
          <CardDescription>{company.GSTIN}</CardDescription>
        </div>
        <div className="flex gap-2">
          <div>Total Due:</div>
          <div
            className={`${
              company.totalDue < 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {company.totalDue}
          </div>
        </div>
        <div>Due Invoice: {company.dueInvoice}</div>
        <div className="flex items-center gap-4">
          <Button className="text-xs md:text-sm p-1 md:p-2">Get Ledger</Button>
          <Link href={`/companies/${params.id}/edit`}>
            <PencilIcon className="h-5 w-5" />
          </Link>
        </div>
      </header>
      <CompanyReport fields={fields} data={reportData} />
      <div
        className="flex justify-center items-center gap-2 mb-4"
        id="pagination"
      >
        <PaginationButton type="previous" disabled={page <= 1}>
          <ArrowLeftIcon className="h-5 w-5" />
        </PaginationButton>
        {page}
        <PaginationButton type="next" disabled={reportData.length < 1}>
          <ArrowRightIcon className="h-5 w-5" />
        </PaginationButton>
      </div>
    </div>
  );
};

export default CompanyPage;
