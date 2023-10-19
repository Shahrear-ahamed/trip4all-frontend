"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import SocialLogin from "./socialLogin";
import { useRouter } from "next/navigation";
import { useUserSignInMutation } from "@/redux/api/auth/authApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema } from "@/constant/formSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { storeUserInfo } from "@/service/auth.service";
import { toast } from "react-toastify";

interface UserAuthSignUpFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthSignInForm({
  className,
  ...props
}: UserAuthSignUpFormProps) {
  const router = useRouter();
  const [signInUser, { isLoading }] = useUserSignInMutation();

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    try {
      // 4. send request to server
      const res = await signInUser(values).unwrap();

      if (res?.accessToken) {
        toast.success("Login successfully", {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
        });
        storeUserInfo({ accessToken: res?.accessToken });
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="email">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        defaultValue={form.watch("email")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="password">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="your password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isLoading}
                        defaultValue={form.watch("password")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* // button  */}
            <Button
              disabled={isLoading}
              className="inline-flex w-full items-center">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </div>
        </form>
      </Form>

      <SocialLogin isLoading={isLoading} />
    </div>
  );
}
