import React, { useEffect } from "react";
import { Card, CardDescription } from "./ui/card";
import { ComboboxForm } from "./ComboBoxForm";
import { items } from "@/sampleData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export interface Item {
  id: string;
  name: string;
  title: string;
  desc1: string;
  desc2: string;
  price: number;
  unit: string;
}

export interface Pack {
  quantity: number;
  bundles: number;
}

export class Package {
  item: Item | null;
  quantity: number;
  packs: Pack[];
  amount: number;

  constructor() {
    this.item = null;
    this.packs = [];
    this.quantity = 0;
    this.amount = 0;
  }

  getQuantity() {
    return this.packs.reduce(
      (acc, pack) => acc + pack.bundles * pack.quantity,
      0
    );
  }
  getAmount() {
    return this.getQuantity() * (this.item?.price || 0);
  }
  setItem(item: Item) {
    this.item = item;
  }
  addPack(quantity: number, bundles: number) {
    this.packs.push({ quantity, bundles });
  }
  setPackBundles(index: number, bundles: number) {
    this.packs[index].bundles = bundles;
  }
  setPackQuantity(index: number, quantity: number) {
    this.packs[index].quantity = quantity;
    this.quantity += quantity;
  }
}

export const PackageComponent = ({
  pkg,
  packages,
  setPackages,
  i,
}: {
  pkg: Package;
  packages: Package[];
  i: number;
  setPackages: React.Dispatch<React.SetStateAction<Package[]>>;
}) => {
  const handleItemChange = (data: any) => {
    const itemId = data.id;
    const newOrderItem = items.find((item: Item) => item.id === itemId);
    if (newOrderItem) {
      pkg.setItem(newOrderItem);
      // Update the packages state to trigger re-render
      const updatedPackages = [...packages];
      updatedPackages[i] = pkg;
      setPackages(updatedPackages);
    }
  };

  const handleRemove = () => {
    // Remove the package at index i
    const updatedPackages = packages.filter((_, index) => index !== i);
    setPackages(updatedPackages);
  };

  return (
    <Card className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-1 gap-2 md:gap-4">
        <ComboboxForm
          classname=""
          data={items.map((item: Item) => {
            return { value: item.name, id: item.id };
          })}
          onSubmit={handleItemChange}
          itemType="Item"
        />
        {pkg.item && (
          <Card className="flex flex-col p-2 md:p-4">
            <div className="text-lg font-semibold">{pkg.item.title}</div>
            <CardDescription>{pkg.item.desc1}</CardDescription>
            <CardDescription>{pkg.item.desc2}</CardDescription>
          </Card>
        )}
        <Card className="flex flex-col p-2 md:p-4">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold">
              Bundles:{" "}
              <Button
                onClick={() => {
                  pkg.addPack(0, 0);
                  // Update the packages state to trigger re-render
                  const updatedPackages = [...packages];
                  updatedPackages[i] = pkg;
                  setPackages(updatedPackages);
                }}
              >
                +
              </Button>
            </div>
            {pkg.packs.length > 0 &&
              pkg.packs.map((pack, i) => {
                return (
                  <div className="flex text-nowrap items-center gap-2" key={i}>
                    <Input
                      placeholder="1000"
                      type="number"
                      onChange={(e) => {
                        pkg.setPackQuantity(i, Number(e.target.value));
                        // Update the packages state to trigger re-render
                        const updatedPackages = [...packages];
                        updatedPackages[i] = pkg;
                        setPackages(updatedPackages);
                      }}
                    />{" "}
                    Items x{" "}
                    <Input
                      placeholder="2"
                      type="number"
                      onChange={(e) => {
                        pkg.setPackBundles(i, Number(e.target.value));
                        // Update the packages state to trigger re-render
                        const updatedPackages = [...packages];
                        updatedPackages[i] = pkg;
                        setPackages(updatedPackages);
                      }}
                    />{" "}
                    Bundles
                  </div>
                );
              })}
          </div>
        </Card>
      </div>

      <div className="grid grid-rows-2">
        <div className="flex justify-around gap-2 lg:gap-4 text-lg font-semibold">
          <div>Quantity</div>
          <div>Price</div>
          <div>Amount</div>
        </div>
        <div className="flex justify-around gap-2 lg:gap-4">
          <div>{pkg.getQuantity()}</div>
          <div>{pkg.item?.price}</div>
          <div>{pkg.getAmount()}</div>
        </div>
        <Button className="ml-6" variant="destructive" onClick={handleRemove}>
          Remove Item
        </Button>
      </div>
    </Card>
  );
};
