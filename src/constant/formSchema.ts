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

export const profileFormSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    })
    .optional(),
  bio: z.string().max(160).min(4).optional(),
  avatar: z.any().optional(),
  gender: z.string().optional(),
  contactNo: z.string().optional(),
  bloodGroup: z.string().optional(),
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

export const categoryFormSchema = z.object({
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
  body: z
    .string()
    .min(3, {
      message: "content must be at least 3 characters.",
    })
    .optional(),
  tagId: z
    .string()
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
  body: z
    .string()
    .min(3, {
      message: "content must be at least 3 characters.",
    })
    .optional(),
  tagId: z
    .string()
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

export const createServiceFormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1000),
  price: z.number().positive(),
  availableDate: z.string(),
  slots: z.number().int().positive(),
  thumbnail: z.string().url(),
  categoryId: z.string(),
  status: z.string(),
});

export const updateServiceFormSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(1000).optional(),
  price: z.number().positive().optional(),
  availableDate: z.string().optional(),
  slots: z.number().int().positive().optional(),
  thumbnail: z.string().url().optional(),
  categoryId: z.string().optional(),
  status: z.string().optional(),
});

export const feedbackFormSchema = z.object({
  comment: z.string().min(1).max(1000),
});

export const reviewFormSchema = z.object({
  comment: z.string().min(1).max(1000),
  rating: z.number().int().min(1).max(5),
  serviceId: z.string().uuid(),
});
