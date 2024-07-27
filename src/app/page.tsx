import { SalesChart } from "@/components/component/sales-chart";
import { Report } from "@/components/report";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { report } from "@/sampleData";

export default function Home() {
  const currentMonthSales = [0, 5, 15, 30, 55, 60, 70];
  const previousMonthSales = [
    0, 10, 25, 35, 45, 50, 60, 65, 90, 75, 80, 100, 110, 120, 130, 140, 150,
    170, 180, 185, 190, 191, 195, 197, 200, 210, 220, 290, 291, 300, 305,
  ];

  return (
    <main>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <div className="col-span-2">
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <SalesChart
                currentMonthSales={currentMonthSales}
                previousMonthSales={previousMonthSales}
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Top Buyers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li key={"123456"}>Company 1: 1,48,776 INR</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Report report={report} />
    </main>
  );
}
