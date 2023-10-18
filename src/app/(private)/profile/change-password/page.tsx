"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { changePasswordFormSchema } from "@/constant/formSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useChangePasswordMutation } from "@/redux/api/auth/authApi";

export default function ChangePassword() {
  const [changePassword, { isLoading, isSuccess }] =
    useChangePasswordMutation();

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof changePasswordFormSchema>>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      newPassword: "",
      oldPassword: "",
      cNewPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof changePasswordFormSchema>) {
    try {
      // check new password and confirm new password
      if (values.newPassword !== values.cNewPassword) {
        toast.error("New password and confirm new password not match", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      const { cNewPassword, ...rest } = values;

      const res = await changePassword(rest).unwrap();
      console.log("Try ", res);
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("This is err", error);
    }
  }

  if (isSuccess) {
    toast.success("Change password successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <div className="max-w-[500px] my-5 mx-auto">
      <h1 className="text-3xl font-semibold">Change password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="oldPassword">
                      Old Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="oldPassword"
                        placeholder="your password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isLoading}
                        defaultValue={form.watch("oldPassword")}
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
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="newPassword">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="newPassword"
                        placeholder="your new password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isLoading}
                        defaultValue={form.watch("newPassword")}
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
                name="cNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only" htmlFor="cNewPassword">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="cNewPassword"
                        placeholder="your confirm new password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isLoading}
                        defaultValue={form.watch("cNewPassword")}
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
    </div>
  );
}
