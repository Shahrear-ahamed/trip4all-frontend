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
import { feedbackFormSchema } from "@/constant/formSchema";
import { useCreateFeedbackMutation } from "@/redux/api/feedback/feedbackApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function AddTagPage() {
  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  // 1. Define react and zod form.
  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      comment: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof feedbackFormSchema>) {
    try {
      // 4. send request to server
      const res = await createFeedback(values).unwrap();
      form.reset();

      if (!res.id) {
        return toast.error("something wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      toast.success("Feedback created successfully.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error: any) {
      console.log("This is err", error);
    }
  }

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">This is feedback page.</h1>

      <div className="max-w-[500px] my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-3">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only" htmlFor="comment">
                        Feedback
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="comment"
                          placeholder="Your feedback"
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
