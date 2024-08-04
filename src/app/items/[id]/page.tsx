"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fetchItemDetails } from "@/sampleData";

const formSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 characters."),
  title: z.string().min(1, "Title must be at least 1 characters"),
  desc1: z
    .string()
    .min(1, "Description must be at least 1 character")
    .max(30, "Description must be at most 30 characters."),
  desc2: z
    .string()
    .min(1, "Description must be at least 1 character")
    .max(30, "Description must be at most 30 characters."),
  price: z.string(),
  unit: z.string(),
});

const itemPage = ({ params }: { params: { id: string } }) => {
  useEffect(() => {
    fetchItemDetails(itemId).then((c) => {
      form.setValue("name", c?.name || "");
      form.setValue("title", c?.title || "");
      form.setValue("desc1", c?.desc1 || "");
      form.setValue("desc2", c?.desc2 || "");
      form.setValue("price", c?.price.toString() || "1");
      form.setValue("unit", c?.unit || "");
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      desc1: "",
      desc2: "",
      price: "",
      unit: "",
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

  const itemId = params.id;
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
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description 1</FormLabel>
                <FormControl>
                  <Input placeholder="description 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description 2</FormLabel>
                <FormControl>
                  <Input placeholder="description 2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="10.5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <FormControl>
                  <Input placeholder="Nos, Kgs" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </main>
  );
};

export default itemPage;
