import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export default function SocialLogin({ isLoading }: { isLoading: boolean }) {
  return (
    <Button variant="outline" type="button" disabled={isLoading}>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.google className="mr-2 h-4 w-4" />
      )}{" "}
      Google
    </Button>
  );
}
