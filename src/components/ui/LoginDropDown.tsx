"use client";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserInfo, removeUserInfo } from "@/service/auth.service";
import { authKey } from "@/constant/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addUser, removeUser } from "@/redux/slice/auth/auth";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function LoginDropDown() {
  let userLoggedIn = getUserInfo() as any;

  const userSlice = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);

  const logOut = () => {
    removeUserInfo(authKey);
    dispatch(removeUser());
  };

  useEffect(() => {
    dispatch(addUser(userLoggedIn));
  }, [dispatch, userLoggedIn]);

  return userSlice.id ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{userSlice?.email}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[100] mt-5 p-0">
        <DropdownMenuCheckboxItem className="p-0">
          <Link
            href="/profile"
            className="w-full h-full inline-block  py-3 pl-7">
            Profile
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          onCheckedChange={setShowStatusBar}
          className="p-0">
          <Link
            href={`/${userSlice?.role}/dashboard`}
            className="w-full h-full inline-block  py-3 pl-7">
            Dashboard
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          onCheckedChange={setShowStatusBar}
          className="p-0">
          <Button
            variant="destructive"
            className="inline-block w-full text-center"
            onClick={logOut}>
            Logout
          </Button>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <li>
      <Link href="/sign-in" className="hidden md:inline-flex ml-10">
        <Button>Sign in</Button>
      </Link>
    </li>
  );
}
