"use client";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { fetchCompanyDetails } from "@/sampleData";
import React, { useEffect, useState } from "react";
import { updateCompany } from "@/actions/updateCompany";

interface Company {
  id: string;
  name: string;
  GSTIN: string;
  add1: string;
  add2: string;
  add3: string;
  top: string;
}

const page = ({ params }: { params: { id: string } }) => {
  const companyId = params.id;

  const [company, setCompany] = useState<Company>({
    id: "",
    name: "",
    GSTIN: "",
    add1: "",
    add2: "",
    add3: "",
    top: "",
  });

  const [name, setName] = useState<string>();

  useEffect(() => {
    fetchCompanyDetails(companyId).then((c) => setCompany(c));
  }, []);

  if (!company) return <div>Loading...</div>;

  return (
    <main className="m-4">
      <CardTitle className="py-4">Edit Company Details</CardTitle>
      <form action={updateCompany}>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">
            Name:{" "}
            <span>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                name="name"
                className="w-1/2 p-2  dark:bg-slate-950 border-b border-black dark:border-white"
                value={company.name}
                onChange={(e) => {
                  setCompany((prevCompany) => ({
                    ...prevCompany,
                    name: e.target.value,
                  }));
                }}
              />
            </span>
          </label>
          <label htmlFor="GSTIN">
            GSTIN:{" "}
            <span>
              <input
                type="text"
                placeholder="Enter GSTIN"
                id="GSTIN"
                name="GSTIN"
                className="w-1/2 p-2  dark:bg-slate-950 border-b border-black dark:border-white"
                value={company.GSTIN}
                onChange={(e) => {
                  setCompany((prevCompany) => ({
                    ...prevCompany,
                    GSTIN: e.target.value,
                  }));
                }}
              />
            </span>
          </label>
          <label htmlFor="add1">
            Address 1:{" "}
            <span>
              <input
                type="text"
                placeholder="Enter Address 1"
                id="add1"
                name="add1"
                className="w-1/2 p-2  dark:bg-slate-950 border-b border-black dark:border-white"
                value={company.add1}
                onChange={(e) => {
                  setCompany((prevCompany) => ({
                    ...prevCompany,
                    add1: e.target.value,
                  }));
                }}
              />
            </span>
          </label>
          <label htmlFor="add2">
            Address 2:{" "}
            <span>
              <input
                type="text"
                placeholder="Enter Address 2"
                id="add2"
                name="add2"
                className="w-1/2 p-2  dark:bg-slate-950 border-b border-black dark:border-white"
                value={company.add2}
                onChange={(e) => {
                  setCompany((prevCompany) => ({
                    ...prevCompany,
                    add2: e.target.value,
                  }));
                }}
              />
            </span>
          </label>
          <label htmlFor="add3">
            Address 3:{" "}
            <span>
              <input
                type="text"
                placeholder="Enter Address 3"
                id="add3"
                name="add3"
                className="w-1/2 p-2  dark:bg-slate-950 border-b border-black dark:border-white"
                value={company.add3}
                onChange={(e) => {
                  setCompany((prevCompany) => ({
                    ...prevCompany,
                    add3: e.target.value,
                  }));
                }}
              />
            </span>
          </label>
          <label htmlFor="top">
            Terms of payment:{" "}
            <span>
              <input
                type="text"
                placeholder="Enter Address Terms of payment"
                id="top"
                name="top"
                className="w-1/2 p-2  dark:bg-slate-950 border-b border-black dark:border-white"
                value={company.top}
                onChange={(e) => {
                  setCompany((prevCompany) => ({
                    ...prevCompany,
                    top: e.target.value,
                  }));
                }}
              />
            </span>
          </label>
        </div>
        <div className="flex gap-4 my-6">
          <button
            type="submit"
            className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Update
          </button>
        </div>
      </form>
    </main>
  );
};

export default page;
