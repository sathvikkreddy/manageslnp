"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

interface ComboboxDataItem {
  value: string;
  id: string | number;
  [key: string]: any;
}
export function ComboboxForm({
  classname,
  data,
  itemType,
  onSubmit,
}: {
  classname: string;
  data: ComboboxDataItem[];
  itemType: string;
  onSubmit: (name: any) => void;
}) {
  const form = useForm();

  function onFormSubmit(data: any) {
    onSubmit(data);
    toast({
      title: `Selected ${JSON.stringify(data)}`,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className={`space-y-6 ${classname}`}
      >
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name={itemType}
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? data.find((d) => d.value === field.value)?.value
                          : `Select ${itemType}`}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder={`Search ${itemType}...`} />
                      <CommandList>
                        <CommandEmpty>No {itemType} found.</CommandEmpty>
                        <CommandGroup>
                          {data.map((d) => (
                            <CommandItem
                              value={d.value}
                              key={d.value}
                              onSelect={() => {
                                form.setValue(itemType, d.value);
                                form.setValue("id", d.id);
                                form.setValue("value", d.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  d.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {d.value}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Select</Button>
        </div>
      </form>
    </Form>
  );
}
