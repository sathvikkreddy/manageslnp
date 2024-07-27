import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const items = new Array<number>(10);
  items.fill(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => {
        return (
          <Skeleton className="p-4" key={index}>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-10 w-full"></Skeleton>
              <Skeleton className="h-5 w-full"></Skeleton>
              <Skeleton className="h-5 w-full"></Skeleton>
              <Skeleton className="h-5 w-full"></Skeleton>
            </div>
          </Skeleton>
        );
      })}
    </div>
  );
}
