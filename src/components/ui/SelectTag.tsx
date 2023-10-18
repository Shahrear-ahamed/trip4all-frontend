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
import { useGetAllTagsQuery } from "@/redux/api/tag/tagApi";
import { ITag } from "@/interface";

type ISelectProps = {
  setTagId: (id: string) => void;
};

export default function SelectTag({ setTagId }: ISelectProps) {
  const { data, isLoading } = useGetAllTagsQuery(undefined);
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
            ? data.find((tag: ITag) => tag.name === value)?.name
            : "Select tag..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No tag found.</CommandEmpty>
          <CommandGroup>
            {!isLoading &&
              data?.map((tag: ITag) => (
                <CommandItem
                  key={tag.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setTagId(tag.id);
                    setOpen(false);
                  }}>
                  {tag.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === tag.name ? "opacity-100" : "opacity-0"
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
