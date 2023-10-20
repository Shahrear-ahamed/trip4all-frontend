export interface IMeta {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type UserLoggedInType = {
  id: string;
  email: string;
  role: string;
};

export type ITag = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type IFaq = {
  id: string;
  title: string;
  body: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IBlog = {
  id: string;
  title: string;
  slug: string;
  tagId: string;
  thumbnail: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

export type ISlugBlog = IBlog & {
  nextBlog?: string | null;
  previousBlog?: string | null;
};

export type ICategory = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type IService = {
  id: string;
  title: string;
  description: string;
  price: number;
  availableDate: string;
  slots: number;
  thumbnail: string;
  categoryId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  availableDate: string;
  slots: number;
  thumbnail: string;
  status: string;
};

export type Category = {
  catId: string;
  catName: string;
  service: Service;
};

export type Status = "pending" | "confirmed" | "completed" | "cancelled";

export type IBooking = {
  id: string;
  profileId: string;
  serviceId: string;
  cartId: string;
  date: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
};

export type IFeedback = {
  id: string;
  profileId: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
};
