import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-20 m-4"></Skeleton>
      <Skeleton className="h-12 m-4" />
      {new Array(15).fill(0).map((i) => (
        <Skeleton key={i} className="h-5 mx-4 my-2" />
      ))}
    </div>
  );
};

export default loading;
