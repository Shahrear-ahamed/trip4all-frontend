import React from "react";
import { Label } from "./label";
import { Input } from "./input";

type InputAndViewProps = {
  title: string;
  canEdit: boolean;
  defaultValue: string;
  id: string;
};

export default function InputAndView({
  title,
  canEdit = true,
  defaultValue,
  id,
}: InputAndViewProps) {
  return (
    <>
      <Label htmlFor={id} className="w-full mb-2">
        {title}
      </Label>
      <Input
        id={id}
        type="text"
        placeholder={defaultValue}
        className={`w-full ${
          canEdit
            ? ""
            : "p-0 shadow-none border-0 bg-transparent focus-visible:ring-0"
        }`}
        defaultValue={defaultValue}
        readOnly={!canEdit}
      />
    </>
  );
}
