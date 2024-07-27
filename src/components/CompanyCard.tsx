"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription } from "./ui/card";

export const CompanyCard = ({
  company,
}: {
  company: {
    Name: string;
    GSTIN: string;
    invoices: number;
    payments: number;
  };
}) => {
  const router = useRouter();

  return (
    <Card
      className="p-4 hover:border-black hover:cursor-pointer dark:hover:border-white"
      onClick={() => router.push(`/companies/${company.GSTIN}`)}
    >
      <div className="text-xl font-semibold">{company.Name}</div>
      <CardDescription className="mb-2">{company.GSTIN}</CardDescription>
      <CardContent className="p-0">{`Invoices: ${company.invoices}`}</CardContent>
      <CardContent className="p-0">{`Payments: ${company.payments}`}</CardContent>
    </Card>
  );
};
