"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { crateFaqFormSchema, tagFormSchema } from "@/constant/formSchema";
import { useCreateFaqMutation } from "@/redux/api/faq/faqApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddFaqPage() {
  const router = useRouter();
  const [createFaq, { isLoading }] = useCreateFaqMutation();
  const [isActive, setIsActive] = useState<string>("");

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof crateFaqFormSchema>>({
    resolver: zodResolver(crateFaqFormSchema),
    defaultValues: {
      isActive: false,
      body: "",
      title: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof crateFaqFormSchema>) {
    try {
      values.isActive = JSON.parse(isActive || "false");

      // 4. send request to server
      // const res = await createFaq(values).unwrap();
      form.reset();

      // console.log("This is res", res);
    } catch (error: any) {
      console.log("This is err", error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">This is add tag page.</h1>

      <div className="max-w-[500px] my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-3">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="title">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="title"
                          placeholder="Question"
                          type="text"
                          autoCapitalize="none"
                          autoComplete=""
                          autoCorrect="off"
                          disabled={isLoading}
                          defaultValue={form.watch("title")}
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
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="body">
                        Body
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="body"
                          placeholder="Tour guide"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          defaultValue={form.watch("body")}
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
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="isActive">
                        Is Active
                      </FormLabel>
                      <Select
                        onValueChange={(value) => setIsActive(value)}
                        defaultValue={isActive}>
                        <FormControl id="isActive">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select value" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="true">True</SelectItem>
                            <SelectItem value="false">False</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
