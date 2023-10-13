import { Metadata } from "next";
import Link from "next/link";
import { UserAuthSignUpForm } from "@/components/view/signUp";
import { UserAuthSignInForm } from "@/components/view/signIn";

export const metadata: Metadata = {
  title: "Sign In - Trip4all",
  description: "Sign in to your Trip4all account",
};

export default function signUpPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login your account
        </p>
      </div>
      <UserAuthSignInForm />
    </div>
  );
}
