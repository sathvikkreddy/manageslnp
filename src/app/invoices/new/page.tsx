"use client";

import { ComboboxForm } from "@/components/ComboBoxForm";
import { Pack, Package, PackageComponent } from "@/components/PackageComponent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { companies, items } from "@/sampleData";
import React, { useEffect, useState } from "react";

const newInvoicePage = () => {
  const [progress, setProgress] = useState<number>(1);
  const [companyId, setCompanyId] = useState<string>("");
  const [gstin, setGSTIN] = useState<string>("");
  const [top, setTop] = useState<string>("");
  const [companyDetails, setCompanyDetails] = useState<any | null>(null);
  const [ewayBill, setEwayBill] = useState<string>("");
  const [po, setPo] = useState<string>("");
  const [packages, setPackages] = useState<Package[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [vehicleNo, setVehicleNo] = useState<string>("");

  const getCompanyDetails = async (companyId: string) => {
    await new Promise((r) => setTimeout(r, 1000));
    return {
      company: {
        id: "uihf387i",
        name: "Company ABC",
        gstin: "27AAACT1234A1Z5",
        sadd1: "sadd1",
        sadd2: "sadd2",
        sadd3: "sadd3",
        badd1: "badd1",
        badd2: "badd2",
        badd3: "badd3",
        top: "60 Days",
      },
      items: items,
    };
  };

  const addNewPackage = () => {
    const newPackage = new Package();
    setPackages((pkgs) => [...pkgs, newPackage]);
  };

  const handleGenerateInvoice = () => {
    console.log({
      invoiceData: {
        companyId: companyId,
        ewayBill: ewayBill,
        packages: packages,
        vehicleNo: vehicleNo,
        po: po,
      },
    });
  };

  useEffect(() => {
    if (companyId) {
      getCompanyDetails(companyId).then((companyDetails) => {
        setCompanyDetails(companyDetails);
        console.log(companyDetails);
        setGSTIN(companyDetails.company.gstin);
        setTop(companyDetails.company.top);
        setProgress(2);
      });
    }
  }, [companyId]);

  useEffect(() => {
    setTotalAmount(
      packages.reduce((acc, pkg) => {
        return acc + pkg.amount;
      }, 0)
    );
  }, [packages]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-stretch md:justify-items-center">
        <CardHeader className="text-nowrap">ffmg/2024-25/69</CardHeader>
        <CardHeader className="text-nowrap">14-06-2024</CardHeader>
        <div className="col-span-2">
          <ComboboxForm
            classname=""
            data={companies.map((company) => {
              return { value: company.Name, id: company.GSTIN };
            })}
            itemType={"Company"}
            onSubmit={(data: any) => setCompanyId(data.id)}
          />
        </div>

        <CardHeader className="text-nowrap">
          {companyDetails && (
            <Input value={gstin} onChange={(e) => setGSTIN(e.target.value)} />
          )}
        </CardHeader>
        <CardHeader className="text-nowrap">
          {companyDetails && (
            <Input value={top} onChange={(e) => setTop(e.target.value)} />
          )}
        </CardHeader>
      </div>
      {progress > 1 && (
        <div>
          <div
            id="address"
            className="m-2 md:m-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:justify-items-center"
          >
            <Card className="p-2 md:p-4">
              <CardHeader className="text-nowrap m-0 p-0 text-lg font-semibold">
                Bill to:
              </CardHeader>
              <div>{companyDetails && companyDetails.company.badd1}</div>
              <div> {companyDetails && companyDetails.company.badd2}</div>
              <div>{companyDetails && companyDetails.company.badd3}</div>
            </Card>
            <Card className="p-2 md:p-4">
              <CardHeader className="text-nowrap m-0 p-0 text-lg font-semibold">
                Ship to:
              </CardHeader>
              <div>{companyDetails && companyDetails.company.sadd1}</div>
              <div>{companyDetails && companyDetails.company.sadd2}</div>
              <div>{companyDetails && companyDetails.company.sadd3}</div>
            </Card>
          </div>
          <CardTitle className="m-2 md:m-4">Items:</CardTitle>
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            {packages.map((p, i) => {
              return (
                <PackageComponent
                  key={i}
                  pkg={p}
                  items={companyDetails.items}
                  i={i}
                  packages={packages}
                  setPackages={setPackages}
                />
              );
            })}
          </div>
          <Button className="m-2 md:m-4" onClick={addNewPackage}>
            Add Item
          </Button>
        </div>
      )}
      <Card className="flex flex-col md:flex-row text-nowrap items-center justify-around gap-4 m-2 md:m-4 p-2">
        <div className="flex text-nowrap gap-2 items-center">
          <div className="text-lg font-semibold"> Total Quantity:</div>
          {packages.reduce((acc, pkg) => {
            return acc + pkg.getQuantity();
          }, 0)}
        </div>
        <div className="flex text-nowrap gap-2 items-center">
          <div className="text-lg font-semibold">Taxable Amount:</div>
          {packages.reduce((acc, pkg) => {
            return acc + pkg.getAmount();
          }, 0)}
        </div>
        <div className="flex text-nowrap gap-2 items-center">
          <div className="text-lg font-semibold">{`GST (${
            companyId.slice(0, 2) === "36" ? "9% + 9%" : "18%"
          }): `}</div>
          {packages.reduce((acc, pkg) => {
            return acc + pkg.getAmount();
          }, 0) *
            (18 / 100)}
        </div>
        <div className="flex text-nowrap gap-2 items-center">
          <div className="text-lg font-semibold">Total Amount:</div>
          {packages.reduce((acc, pkg) => {
            return acc + pkg.getAmount() + (pkg.getAmount() * 18) / 100;
          }, 0)}
        </div>
      </Card>

      <div className="flex md:flex-row flex-col gap-4 justify-center ">
        <div className="flex text-nowrap items-center gap-2">
          <div className="text-lg font-semibold">Vehicle: </div>
          <Input
            placeholder="TS34T8398"
            onChange={(e) => {
              setVehicleNo(e.target.value);
            }}
          />{" "}
        </div>
        <div className="flex text-nowrap items-center gap-2">
          <div className="text-lg font-semibold">PO & Date: </div>
          <Input
            placeholder="PO Number"
            onChange={(e) => {
              setPo(e.target.value);
            }}
          />{" "}
        </div>
        {packages.reduce((acc, pkg) => {
          return acc + pkg.getAmount() + (pkg.getAmount() * 18) / 100;
        }, 0) > 50000 && (
          <div className="flex text-nowrap items-center gap-2">
            <div className="text-lg font-semibold">Ewaybill: </div>
            <Input
              placeholder="Way Bill Number"
              onChange={(e) => {
                setEwayBill(e.target.value);
              }}
            />{" "}
          </div>
        )}
        {packages.reduce((acc, pkg) => {
          return acc + pkg.getAmount() + (pkg.getAmount() * 18) / 100;
        }, 0) > 0 ? (
          packages.reduce((acc, pkg) => {
            return acc + pkg.getAmount() + (pkg.getAmount() * 18) / 100;
          }, 0) > 50000 ? (
            ewayBill ? (
              vehicleNo ? (
                <div className="flex justify-center">
                  <Button onClick={handleGenerateInvoice}>
                    Generate Invoice
                  </Button>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )
          ) : vehicleNo ? (
            <div className="flex justify-center">
              <Button onClick={handleGenerateInvoice}>Generate Invoice</Button>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default newInvoicePage;
