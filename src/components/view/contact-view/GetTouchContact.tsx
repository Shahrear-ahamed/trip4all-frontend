"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function GetTouchContact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div className="max-w-[1000px] mx-auto my-20">
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 my-8">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold pr-5 flex items-center relative w-fit after:block after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-full after:bg-primary after:w-1">
          Get in touch
        </h3>
        <p className="flex items-center">
          If you have any questions, just fill in the contact form, and we will
          answer you shortly.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-5 mt-10">
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="name">
              Name
            </Label>
            <Input
              type="name"
              id="email"
              placeholder="Your name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              className="h-12"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="email">
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
              className="h-12"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="number">
              Phone
            </Label>
            <Input
              id="number"
              placeholder="+01 234 567 89"
              type="number"
              autoCapitalize="none"
              autoComplete="number"
              autoCorrect="off"
              disabled={isLoading}
              className="h-12"
            />
          </div>
        </div>

        <Textarea
          placeholder="Type your message here."
          className="min-h-[100px]"
        />

        <Button className="w-40" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </div>
  );
}
