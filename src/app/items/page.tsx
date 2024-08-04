import { CompaniesSearch } from "@/components/SearchBars";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { items } from "@/sampleData";
import Link from "next/link";
import React from "react";

const itemsPage = async ({
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
          <h1 className="md:text-xl font-bold">Items</h1>
        </div>
        <div className="flex-1 max-w-md">
          <CompaniesSearch />
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/companies/new"}>
            <Button className="text-xs md:text-sm p-1 md:p-2">+ Item</Button>
          </Link>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {items
          .filter((item) => {
            if (searchQuery === "") {
              return true;
            } else {
              return (
                item.name.toLowerCase().includes(searchQuery) ||
                item.title.toLowerCase().includes(searchQuery) ||
                item.desc1.toLowerCase().includes(searchQuery) ||
                item.desc2.toLowerCase().includes(searchQuery)
              );
            }
          })
          .map((item) => {
            return (
              <Link href={`/items/${item.id}`} key={item.id}>
                <Card className="hover:border-black hover:cursor-pointer dark:hover:border-white">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>{item.desc1}</CardContent>
                  <CardContent>{item.desc2}</CardContent>
                </Card>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default itemsPage;
