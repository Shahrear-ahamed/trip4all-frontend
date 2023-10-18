"use client";

import * as z from "zod";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import SocialLogin from "./socialLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { USER_ROLE_LABEL } from "@/constant/role";
import { useUserSignUpMutation } from "@/redux/api/auth/authApi";
import { SuccessAlert } from "../ui/myAlerts";
import { useRouter } from "next/navigation";
import { signUpFormSchema } from "@/constant/formSchema";

interface UserAuthSignUpFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthSignUpForm({
  className,
  ...props
}: UserAuthSignUpFormProps) {
  const router = useRouter();
  const [signUpUser, { isLoading, isSuccess, isError }] =
    useUserSignUpMutation();

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
      cPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    // check password and confirm password
    if (values.password !== values.cPassword) {
      return form.setError("cPassword", {
        message: "password and confirm password must be same.",
      });
    }

    // 3. set user role
    values = { ...values, role: USER_ROLE_LABEL.USER };

    try {
      // 4. send request to server
      await signUpUser(values).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  if (isSuccess && !isError) {
    <div className="absolute top-1/4 left-10 w-[200px]">
      <SuccessAlert message="Account created successfully. Please login" />;
    </div>;
    router.push("/sign-in");
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
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="cPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="cPassword">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="cPassword"
                        placeholder="Confirm password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isLoading}
                        defaultValue={form.watch("cPassword")}
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
              Create account
            </Button>
          </div>
        </form>
      </Form>

      <SocialLogin isLoading={isLoading} />
    </div>
  );
}
