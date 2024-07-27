"use client";

import React from "react";
import { Button } from "./ui/button";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export const EditButton = ({ href }: { href: string }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push(href);
      }}
    >
      <PencilIcon className="h-5 w-5" />
    </Button>
  );
};
