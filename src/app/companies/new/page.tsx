"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 characters."),
  gstin: z.string().length(15, "GSTIN must be 15 characters"),
  badd1: z
    .string()
    .min(1, "Billing address 1 must be at least 1 character")
    .max(45, "Billing address 1 must be at most 45 characters."),
  badd2: z.string().max(45, "Billing address 2 must be at most 45 characters."),
  badd3: z.string().max(45, "Billing address 3 must be at most 45 characters."),
  isSameAddress: z.boolean(),
  sadd1: z
    .string()
    .min(1, "Shipping address 1 must be at least 1 character")
    .max(45, "Shipping address 1 must be at most 45 characters."),
  sadd2: z
    .string()
    .max(45, "Shipping address 2 must be at most 45 characters."),
  sadd3: z
    .string()
    .max(45, "Shipping address 3 must be at most 45 characters."),
  top: z.string(),
});

const page = () => {
  const [sameAddress, setSameAddress] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gstin: "",
      top: "",
      badd1: "",
      badd2: "",
      badd3: "",
      sadd1: "",
      sadd2: "",
      sadd3: "",
      isSameAddress: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "Form Data Submitted",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          {JSON.stringify(values, null, 2)}
        </pre>
      ),
    });

    // Reset the form values
    console.log(values);
  }

  return (
    <main className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gstin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GSIN</FormLabel>
                <FormControl>
                  <Input placeholder="36ABFFS2987Z1QH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sadd1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address 1</FormLabel>
                <FormControl>
                  <Input placeholder="Sy.no: 42 & 43 ...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sadd2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address 2</FormLabel>
                <FormControl>
                  <Input placeholder="Medchal, Hyderabad ...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sadd3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address 3</FormLabel>
                <FormControl>
                  <Input placeholder="Pincode: 500054 ...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isSameAddress"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(e) => {
                      field.onChange(e);
                      if (e.valueOf()) {
                        form.setValue("badd1", form.getValues("sadd1"));
                        form.setValue("badd2", form.getValues("sadd2"));
                        form.setValue("badd3", form.getValues("sadd3"));
                      } else {
                        form.setValue("badd1", "");
                        form.setValue("badd2", "");
                        form.setValue("badd3", "");
                      }
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Use shipping address for billing</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="badd1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing Address 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sy.no: 42 & 43 ...."
                    {...field}
                    onClick={() => form.setValue("isSameAddress", false)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="badd2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing Address 2</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Medchal, Hyderabad ...."
                    {...field}
                    onClick={() => form.setValue("isSameAddress", false)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="badd3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing Address 3</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pincode: 500054 ...."
                    {...field}
                    onClick={() => form.setValue("isSameAddress", false)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="top"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Terms of payment</FormLabel>
                <FormControl>
                  <Input placeholder="30 days" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};

export default page;
