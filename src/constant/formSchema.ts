import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.string().email({
    message: "enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
  cPassword: z.string().min(6, {
    message: "confirm password must be at least 6 characters.",
  }),
  role: z.string().optional(),
});

export const signInFormSchema = z.object({
  email: z.string().email({
    message: "enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});
