import { authKey } from "@/constant/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addUser, removeUser } from "@/redux/slice/auth/auth";
import { getUserInfo, removeUserInfo } from "@/service/auth.service";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./button";

export default function LoginMobile() {
  let userLoggedIn = getUserInfo() as any;

  const userSlice = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logOut = () => {
    removeUserInfo(authKey);
    dispatch(removeUser());
  };

  useEffect(() => {
    dispatch(addUser(userLoggedIn));
  }, [dispatch, userLoggedIn]);

  return userSlice.id ? (
    <div>
      <ul className="pl-5 mt-2 border-t border-t-gray-600">
        <li>
          <Link href="/profile" className="w-full h-full inline-block py-3">
            Profile
          </Link>
        </li>
        <li>
          <Link
            href={`/${userSlice?.role}/dashboard`}
            className="w-full h-full inline-block py-3">
            Dashboard
          </Link>
        </li>
        <li className="mt-5">
          <Button
            variant="destructive"
            className="inline-block w-full text-center"
            onClick={logOut}>
            Logout
          </Button>
        </li>
      </ul>
    </div>
  ) : (
    <div>
      <Link href="/sign-in" className="inline-block w-full">
        <Button className="w-full text-center">Sign in</Button>
      </Link>
    </div>
  );
}
