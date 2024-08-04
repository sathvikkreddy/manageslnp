import React, { useEffect, useState } from "react";
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
  items,
  setPackages,
  i,
}: {
  pkg: Package;
  packages: Package[];
  items: Item[];
  i: number;
  setPackages: React.Dispatch<React.SetStateAction<Package[]>>;
}) => {
  const handleItemChange = (data: any) => {
    const itemId = data.id;
    const newOrderItem = items.find((item: Item) => item.id === itemId);
    if (newOrderItem) {
      pkg.setItem(newOrderItem);
      setDesc1(pkg.item?.desc1 || "");
      setDesc2(pkg.item?.desc2 || "");
      // Update the packages state to trigger re-render
      const updatedPackages = [...packages];
      updatedPackages[i] = pkg;
      setPackages(updatedPackages);
    }
  };

  const handleItemDesc = (
    e: React.ChangeEvent<HTMLInputElement>,
    num: number
  ) => {
    if (num === 1 && pkg.item?.desc1) {
      setDesc1(e.target.value);
      pkg.item.desc1 = desc1;
    } else if (num === 2 && pkg.item?.desc2) {
      setDesc2(e.target.value);
      pkg.item.desc2 = desc2;
    }
    const updatedPackages = [...packages];
    updatedPackages[i] = pkg;
    setPackages(updatedPackages);
  };

  const [desc1, setDesc1] = useState(pkg.item?.desc1 || "");
  const [desc2, setDesc2] = useState(pkg.item?.desc2 || "");

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
            <CardDescription>
              <Input value={desc1} onChange={(e) => handleItemDesc(e, 1)} />
            </CardDescription>
            <CardDescription>
              {" "}
              <Input
                value={desc2}
                onChange={(e) => handleItemDesc(e, 2)}
              />{" "}
            </CardDescription>
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
                    {pkg.item?.unit} x{" "}
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
