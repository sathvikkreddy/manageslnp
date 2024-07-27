"use client";

import React from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const CompaniesSearch = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query && query.trim().length > 0) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${path}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
        onChange={(e) => handleSearch(e)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="h-5 w-5" />
    </div>
  );
};
