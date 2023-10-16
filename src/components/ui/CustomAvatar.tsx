"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export default function CustomAvatar({
  className,
  AltName,
}: {
  className?: string;
  AltName?: string;
}) {
  let initials;

  if (AltName?.includes(" ")) {
    initials = AltName.split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  } else {
    initials = AltName?.substring(0, 2).toUpperCase();
  }

  return (
    <Avatar>
      <AvatarImage className={className} src="https://github.com/shadcn.png" />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
