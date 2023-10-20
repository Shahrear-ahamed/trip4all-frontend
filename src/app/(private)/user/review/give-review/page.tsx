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
import { reviewFormSchema } from "@/constant/formSchema";
import { useCreateReviewMutation } from "@/redux/api/review/reviewApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function MyReview() {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof reviewFormSchema>>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      serviceId: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof reviewFormSchema>) {
    try {
      // 4. send request to server
      const res = await createReview(values).unwrap();
      form.reset();

      if (res.id) {
        toast.success("review added successfully.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error: any) {
      console.log("This is err", error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">This is add review page.</h1>

      <div className="max-w-[500px] my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-3">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="rating">
                        rating
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="rating"
                          placeholder="Your rating"
                          type="number"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={isLoading}
                          defaultValue={form.watch("rating")}
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
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="title">
                        Comment
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
                          defaultValue={form.watch("comment")}
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
