// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Icons } from "@/components/ui/icons";
// import { Input } from "@/components/ui/input";
// import { categoryFormSchema } from "@/constant/formSchema";
// import { useCreateCategoryMutation } from "@/redux/api/category/categoryApi";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React from "react";
// import { Form, useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { z } from "zod";

// export default function AddCategory() {
//   // 1. Define react and zod form.
//   const form = useForm<z.infer<typeof categoryFormSchema>>({
//     resolver: zodResolver(categoryFormSchema),
//     defaultValues: {
//       name: "",
//     },
//   });

//   const [createCategory, { isLoading }] = useCreateCategoryMutation(undefined);

//   // 2. Define a submit handler.
//   async function onSubmit(values: z.infer<typeof categoryFormSchema>) {
//     try {
//       // 4. send request to server
//       const res = await createCategory(values).unwrap();
//       form.reset();

//       if (res.id) {
//         toast.success("Tag created successfully.", {
//           position: toast.POSITION.TOP_CENTER,
//         });
//       }
//     } catch (error: any) {
//       console.log("This is err", error);
//     }
//   }

//   return (
//     <section className="px-2">
//       <h1 className="text-3xl font-semibold">Add Category</h1>

//       <div className="max-w-[500px] my-5">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <div className="grid gap-3">
//               <div className="grid gap-1">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="sr-only" htmlFor="title">
//                         Title
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           id="title"
//                           placeholder="Tour guide"
//                           type="text"
//                           autoCapitalize="none"
//                           autoComplete="email"
//                           autoCorrect="off"
//                           disabled={isLoading}
//                           defaultValue={form.watch("name")}
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               {/* // button  */}
//               <Button
//                 disabled={isLoading}
//                 className="inline-flex w-full items-center">
//                 {isLoading && (
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                 )}
//                 Create
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </section>
//   );
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "@/redux/api/category/categoryApi";
import { Icons } from "@/components/ui/icons";
import { categoryFormSchema } from "@/constant/formSchema";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});

export default function CategoryPage() {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  // 1. Define your form.
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof categoryFormSchema>) {
    try {
      // 4. send request to server
      const res = await createCategory(values).unwrap();

      if (!res.id) {
        return toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      form.reset();
      toast.success("Tag created successfully.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error: any) {
      console.log("This is err", error);
    }
  }

  return (
    <section className="px-2">
      <h1 className="text-3xl font-semibold">Add Category</h1>

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
                      <FormLabel className="" htmlFor="title">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="title"
                          placeholder="Category name"
                          type="text"
                          autoCapitalize="none"
                          autoComplete="none"
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
                className="inline-flex w-full items-center mt-3">
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
