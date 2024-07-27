import { CompanyCard } from "@/components/CompanyCard";
import { CompaniesSearch } from "@/components/SearchBars";
import { Button } from "@/components/ui/button";
import { companies } from "@/sampleData";
import React from "react";

const companiesPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const searchQuery = searchParams?.query || "";

  return (
    <div>
      <header className="flex items-center justify-between bg-background px-4 py-3 md:px-6">
        <div>
          <h1 className="md:text-xl font-bold">Companies</h1>
        </div>
        <div className="flex-1 max-w-md">
          <CompaniesSearch />
        </div>
        <div className="flex items-center gap-4">
          <Button className="text-xs md:text-sm p-1 md:p-2">+ Company</Button>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {companies
          .filter((company) => {
            if (searchQuery === "") return true;
            else
              return (
                company.Name.includes(searchQuery) ||
                company.GSTIN.includes(searchQuery)
              );
          })
          .map((company) => {
            return <CompanyCard company={company} key={company.GSTIN} />;
          })}
      </div>
    </div>
  );
};

export default companiesPage;
