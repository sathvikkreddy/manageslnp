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
  const [companyDetails, setCompanyDetails] = useState<any | null>(null);
  const [ewayBill, setEwayBill] = useState<string>("");
  const [packages, setPackages] = useState<Package[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [vehicleNo, setVehicleNo] = useState<string>("");

  const getCompanyDetails = async (companyId: string) => {
    await new Promise((r) => setTimeout(r, 1000));
    return {
      id: companyId,
      name: "Tech Solutions Ltd.",
      GSTIN: companyId,
      invoices: 120,
      payments: 150000,
      items: items,
    };
  };

  const addNewPackage = () => {
    const newPackage = new Package();
    setPackages((pkgs) => [...pkgs, newPackage]);
  };

  useEffect(() => {
    if (companyId) {
      getCompanyDetails(companyId).then((companyDetails) => {
        setCompanyDetails(companyDetails);
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
      <div className="grid lg:grid-cols-6 gap-4 items-center justify-items-center">
        <CardHeader className="text-nowrap m-0 p-0">
          Invoice: ffmg/2024-25/69
        </CardHeader>
        <CardHeader className="text-nowrap m-0 p-0">
          Date: 14-06-2024
        </CardHeader>
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
        <CardHeader className="text-nowrap m-0 p-0">
          GSTIN: {companyDetails && companyDetails.GSTIN}
        </CardHeader>
        <CardHeader className="text-nowrap m-0 p-0">
          TOP: {companyDetails && "60 Days"}
        </CardHeader>
      </div>
      {progress > 1 && (
        <div>
          <div
            id="address"
            className="m-2 md:m-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:justify-items-center"
          >
            <Card className="p-2 md:p-4">
              <CardHeader className="text-nowrap m-0 p-0">Bill to:</CardHeader>
              <div>
                Address 1: {companyDetails && "ijihefuwdb8gw9q8ih98kbsz"}
              </div>
              <div>
                Address 2:{" "}
                {companyDetails && "ijihefuwcwfcdfscdecrfdb8gw9q8ih98kbsz"}
              </div>
              <div>
                Address 3: {companyDetails && "ijihefuwdb8gw9qvsdv8ih98kbsz"}
              </div>
            </Card>
            <Card className="p-2 md:p-4">
              <CardHeader className="text-nowrap m-0 p-0">Ship to:</CardHeader>
              <div>
                Address 1: {companyDetails && "ijihefuwdb8gw9q8ih98kbsz"}
              </div>
              <div>
                Address 2: {companyDetails && "ijihefuwdb8gw9q8ih98kbsz"}
              </div>
              <div>
                Address 3: {companyDetails && "ijihefuwdb8gw9q8ih98kbsz"}
              </div>
            </Card>
          </div>
          <CardTitle className="m-2 md:m-4">Items:</CardTitle>
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            {packages.map((p, i) => {
              return (
                <PackageComponent
                  key={i}
                  pkg={p}
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
      <Card className="flex text-nowrap items-center justify-around gap-4 m-2 md:m-4 p-2">
        <div>
          Total Quantity:{" "}
          {packages.reduce((acc, pkg) => {
            return acc + pkg.getQuantity();
          }, 0)}
        </div>
        <div>
          Total Amount:{" "}
          {packages.reduce((acc, pkg) => {
            return acc + pkg.getAmount();
          }, 0)}
        </div>
        <div>
          {`GST (${companyId.slice(0, 2) === "36" ? "9% + 9%" : "18%"}): ${
            packages.reduce((acc, pkg) => {
              return acc + pkg.getAmount();
            }, 0) *
            (18 / 100)
          } `}
        </div>
        {packages.reduce((acc, pkg) => {
          return acc + pkg.getAmount();
        }, 0) > 50000 && (
          <Input
            placeholder="Eway Bill"
            value={ewayBill}
            onChange={(e) => {
              setEwayBill(e.target.value);
            }}
          />
        )}
        <Input
          placeholder="TS35T4398"
          value={vehicleNo}
          onChange={(e) => {
            setVehicleNo(e.target.value);
          }}
        />
      </Card>

      {packages.reduce((acc, pkg) => {
        return acc + pkg.getAmount();
      }, 0) > 0 && (
        <div className="flex justify-center">
          <Button>Generate Invoice</Button>
        </div>
      )}
    </div>
  );
};

export default newInvoicePage;
