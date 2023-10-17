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
import { tagFormSchema } from "@/constant/formSchema";
import { useCreateTagMutation } from "@/redux/api/tag/tagApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddTagPage() {
  const router = useRouter();
  const [createTag, { isLoading }] = useCreateTagMutation();

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof tagFormSchema>>({
    resolver: zodResolver(tagFormSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof tagFormSchema>) {
    try {
      console.log("This is values", values);
      // 4. send request to server
      const res = await createTag(values).unwrap();

      console.log("This is res", res);
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="title">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="title"
                          placeholder="Tour guide"
                          type="text"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          defaultValue={form.watch("name")}
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
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
