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

export const changePasswordFormSchema = z.object({
  oldPassword: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
  newPassword: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
  cNewPassword: z
    .string()
    .min(6, {
      message: "confirm password must be at least 6 characters.",
    })
    .optional(),
});

export const tagFormSchema = z.object({
  name: z.string().min(3, {
    message: "tag name must be at least 3 characters.",
  }),
});

export const createBlogFormSchema = z.object({
  title: z.string().min(3, {
    message: "title must be at least 3 characters.",
  }),
  slug: z.string().min(3, {
    message: "slug must be at least 3 characters.",
  }),
  blog: z.string().min(3, {
    message: "content must be at least 3 characters.",
  }),
  tagId: z.array(z.string()).min(1, {
    message: "select at least one tag.",
  }),
  thumbnail: z.string().url({
    message: "enter a valid url.",
  }),
});

export const updateBlogFormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "title must be at least 3 characters.",
    })
    .optional(),
  slug: z
    .string()
    .min(3, {
      message: "slug must be at least 3 characters.",
    })
    .optional(),
  blog: z
    .string()
    .min(3, {
      message: "content must be at least 3 characters.",
    })
    .optional(),
  tagId: z
    .array(z.string())
    .min(1, {
      message: "select at least one tag.",
    })
    .optional(),
  thumbnail: z
    .string()
    .url({
      message: "enter a valid url.",
    })
    .optional(),
});

export const crateFaqFormSchema = z.object({
  title: z.string().min(3, {
    message: "title must be at least 3 characters.",
  }),
  body: z.string().min(3, {
    message: "body must be at least 3 characters.",
  }),
  isActive: z.boolean().optional(),
});

export const updateFaqFormSchema = z.object({
  title: z.string().min(3, {
    message: "title must be at least 3 characters.",
  }),
  body: z.string().min(3, {
    message: "body must be at least 3 characters.",
  }),
  isActive: z.boolean().optional(),
});
