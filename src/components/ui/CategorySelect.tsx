"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ICategory } from "@/interface";
import { useGetAllCategoriesQuery } from "@/redux/api/category/categoryApi";

type ISelectProps = {
  setCategoryId: (id: string) => void;
};

export default function SelectCategory({ setCategoryId }: ISelectProps) {
  const { data, isLoading } = useGetAllCategoriesQuery(undefined);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between">
          {value
            ? data?.find(
                (category: ICategory) => category.name.toLowerCase() === value
              )?.name
            : "Select tag..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search categories..." className="h-9" />
          <CommandEmpty>No tag found.</CommandEmpty>
          <CommandGroup>
            {!isLoading &&
              data?.map((category: ICategory) => (
                <CommandItem
                  key={category.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setCategoryId(category.id);
                    setOpen(false);
                  }}>
                  {category.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === category.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
