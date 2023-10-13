"use client";

import { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { Icons } from "./icons";
import { BsSendCheckFill } from "react-icons/bs";

export default function NewsLetter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
        <div className="grid gap-1 mr-4">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <BsSendCheckFill className="mr-2 h-4 w-4" />
          )}
          Subscribe
        </Button>
      </div>
    </form>
  );
}
