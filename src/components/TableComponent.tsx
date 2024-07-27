"use client";

import React, { useState } from "react";
import { Card, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { dateToString } from "@/lib/DateToString";
import { capitalize } from "@/lib/capitalize";

export const TableComponent = ({
  fields,
  data,
  rowOnClick = () => {},
}: {
  fields: string[];
  data: any[];
  rowOnClick?: (row: any) => void;
}) => {
  console.log();

  if (data.length < 1)
    return <div className="text-center p-4 m-4 text-xl">No results found</div>;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:flex md:items-center">
              S. No
            </TableHead>
            {fields.map((field) => (
              <TableHead key={field}>{capitalize(field)}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => {
            return (
              <TableRow onClick={rowOnClick} key={index}>
                <TableCell className="hidden md:flex md:items-center">
                  {index + 1}
                </TableCell>
                {fields.map((field) => {
                  if (row[field] instanceof Date) {
                    return (
                      <TableCell key={field}>
                        {dateToString(row[field])}
                      </TableCell>
                    );
                  } else {
                    return <TableCell key={field}>{row[field]}</TableCell>;
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
