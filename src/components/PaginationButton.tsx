"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const PaginationButton = ({
  type,
  disabled,
  children,
}: {
  type: "next" | "previous";
  disabled: boolean;
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleClick = () => {
    const currentPage = Number(params.get("page") || "1");
    const newPage = type === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage < 1) return;
    params.set("page", newPage.toString());
    replace(`${path}?${params.toString()}`);
  };

  return (
    <Button onClick={handleClick} disabled={disabled}>
      {children}
    </Button>
  );
};
