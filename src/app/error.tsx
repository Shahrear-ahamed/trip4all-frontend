"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="py-10 bg-white flex items-center h-screen">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="error_bg">
                <h1 className="text-center text-7xl">Something went wrong!</h1>
              </div>

              <div className="-mt-12">
                <h3 className="h2">Look like you&apos;re lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Button
                  onClick={() => reset()}
                  variant={"secondary"}
                  className="px-5 my-5 inline-block">
                  Something went wrong!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
