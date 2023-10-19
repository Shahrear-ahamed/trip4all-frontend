"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { profileFormSchema } from "@/constant/formSchema";
import { useEffect, useState } from "react";
import { bloodGroups } from "@/constant/global";
import removeEmptyProperties from "@/utils/removeEmptyProperties";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/user/userApi";
import { toast } from "react-toastify";
import imageUpload from "@/utils/imageUpload";

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function Profile() {
  const [previewImg, setPreviewImg] = useState("https://github.com/shadcn.png");
  const [updateProfileImage, setUpdateProfileImage] = useState<any>();
  const {
    data,
    isSuccess: profileSuccess,
    isLoading: profileLoading,
  } = useGetProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateProfile, {}] = useUpdateProfileMutation();
  const [canEdit, setCanEdit] = useState(false);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  if (profileLoading) {
    return <div>loading...</div>;
  }

  // image preview
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setUpdateProfileImage(file);
      setPreviewImg(URL.createObjectURL(file));
      URL.revokeObjectURL(previewImg);
    }
  };

  async function onSubmit(data: ProfileFormValues) {
    const refreshed = removeEmptyProperties(data);

    if (Object.keys(refreshed).length === 0 && !updateProfileImage) return;

    try {
      // check if image is updated
      let cloudinaryResponse = null;

      if (updateProfileImage)
        cloudinaryResponse = await imageUpload(updateProfileImage);

      if (!cloudinaryResponse) {
        return toast.error("Cant upload image", {
          position: "top-center",
        });
      }

      if (cloudinaryResponse) {
        setUpdateProfileImage(undefined);
        setPreviewImg(cloudinaryResponse.url);
        refreshed.avatar = cloudinaryResponse.url;
      }

      // if image is updated then set url to the image
      // not the file then only send data to the server
      const result = await updateProfile(refreshed).unwrap();

      if (!result.id) {
        toast.error("Please try again later.", {
          position: "top-center",
        });
      }

      setCanEdit(false);
      toast.success("Profile updated successfully.", {
        position: "top-center",
      });
      form.reset();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div className="my-5 max-w-4xl mx-auto rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-semibold text-center">You profile</h1>
      <div className="mt-5 space-x-5 flex flex-col items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <div className="flex items-center space-x-6 relative justify-center">
                  <div className="shrink-0 w-20 h-20">
                    <Avatar className="w-full h-full">
                      {canEdit ? (
                        <AvatarImage
                          src={previewImg}
                          alt="change profile image"
                          className="w-20 h-20"
                        />
                      ) : (
                        <AvatarImage
                          src={data?.avatar ? data?.avatar : previewImg}
                          alt="change profile image"
                          className="w-20 h-20"
                        />
                      )}
                      <AvatarFallback>CN</AvatarFallback>
                      {canEdit && (
                        <label className="inline absolute h-full w-full !ml-0 cursor-pointer">
                          <span className="sr-only">Choose photo</span>
                          <Input
                            {...field}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFileChange}
                            className="w-full text-sm border-none
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-none
              file:text-transparent file:font-semibold
              file:bg-transparent file:cursor-pointer
              hover:file:bg-transparent"
                          />
                        </label>
                      )}
                    </Avatar>
                  </div>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={data?.fullName || ""}
                      placeholder="your name"
                      {...field}
                      readOnly={!canEdit}
                      className={cn(
                        canEdit
                          ? ""
                          : "cursor-default shadow-none bg-transparent focus-visible:ring-0"
                      )}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contact number"
                      {...field}
                      readOnly={!canEdit}
                      defaultValue={data?.contactNo || ""}
                      className={cn(
                        canEdit
                          ? ""
                          : "cursor-default shadow-none bg-transparent focus-visible:ring-0"
                      )}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-5 space-x-0 md:flex-row md:space-y-0 md:space-x-5">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      disabled={!canEdit}
                      onValueChange={field.onChange}
                      defaultValue={data?.gender || ""}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Please select your right gender
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood group</FormLabel>
                    <Select
                      disabled={!canEdit}
                      onValueChange={field.onChange}
                      defaultValue={data?.bloodGroup || ""}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your blood group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {bloodGroups.map((bloodGroup) => (
                          <SelectItem key={bloodGroup} value={bloodGroup}>
                            {bloodGroup}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Please right your blood group.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      {...field}
                      readOnly={!canEdit}
                      defaultValue={data?.bio || ""}
                      className={cn(
                        canEdit
                          ? ""
                          : "cursor-default shadow-none bg-transparent focus-visible:ring-0 resize-none"
                      )}
                    />
                  </FormControl>
                  <FormDescription>
                    You can <span>@mention</span> other users and organizations
                    to link to them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {canEdit ? (
              <Button type="submit">Update profile</Button>
            ) : (
              <Button type="button" onClick={() => setCanEdit(true)}>
                Edit profile
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
