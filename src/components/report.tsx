"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardTitle } from "./ui/card";
import { TableComponent } from "./TableComponent";

interface ReportDataItem {
  sNo: number;
  date: Date;
  company: string;
  type: string;
  invoice?: string;
  amount: number;
}

export const Report = ({
  report,
}: {
  report: {
    currentMonth: { name: string; reportData: ReportDataItem[] };
    lastMonth: { name: string; reportData: ReportDataItem[] };
  };
}) => {
  const [filterType, setFilterType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Date");
  const [sortOrder, setSortOrder] = useState<string>("Desc");
  const [filteredData, setFilteredData] = useState<ReportDataItem[]>(
    report.currentMonth.reportData
  );
  // const [currentMonth, setCurrentMonth] = useState<boolean>(true);

  const tableFields = ["date", "company", "type", "invoice", "amount"];
  // Function to filter and sort data
  const getFilteredAndSortedData = () => {
    console.log(filterType, sortBy, sortOrder);
    let filteredData = report.currentMonth.reportData;

    // Apply filter
    if (filterType !== "All") {
      console.log(filterType);
      filteredData = filteredData.filter((data) => data.type === filterType);
    }

    // Apply sorting
    const sortedData = filteredData.sort((a, b) => {
      let aValue: any, bValue: any;

      // Determine the value to sort by
      if (sortBy === "Date") {
        aValue = a.date.getTime();
        bValue = b.date.getTime();
      } else if (sortBy === "Amount") {
        aValue = a.amount;
        bValue = b.amount;
      }

      // Sort order
      return sortOrder === "Asc" ? aValue - bValue : bValue - aValue;
    });
    setFilteredData(sortedData);
  };

  useEffect(() => {
    getFilteredAndSortedData();
  }, [filterType, sortBy, sortOrder]);

  return (
    <section className="p-4" id="report">
      <div className="flex items-center justify-between mb-4 md:px-4 px-2">
        <div className="flex items-center gap-2">
          <CardTitle>{report.currentMonth.name + " Report"}</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Select
            onValueChange={(value) => {
              setFilterType(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Invoice">Invoices</SelectItem>
              <SelectItem value="Payment">Payments</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => {
              setSortBy(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Date">Date</SelectItem>
              <SelectItem value="Amount">Amount</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => {
              setSortOrder(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Desc" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Asc">Asc</SelectItem>
              <SelectItem value="Desc">Desc</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card>
        <TableComponent fields={tableFields} data={filteredData} />
      </Card>
    </section>
  );
};
