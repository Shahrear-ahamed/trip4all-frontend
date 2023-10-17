"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TextEditor from "@/components/ui/textEditor";
import { SelectContent } from "@radix-ui/react-select";
import { useState } from "react";

export default function AddBlog() {
  const [blog, setBlog] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  return (
    <section className="px-2">
      <h1 className="text-3xl font-semibold">Add New Blog</h1>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" placeholder="Blog title" />
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="slug">Slug</Label>
            <Input
              type="text"
              id="slug"
              placeholder="Blog slug it will use in url"
            />
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tag">Tag</Label>

            <Select>
              <Input
                type="text"
                id="tag"
                placeholder="Select blog tag"
                className="w-[180px]"
              />
              <SelectTrigger className="w-[180px]">
                {/* <SelectValue placeholder="Select a fruit" /> */}
              </SelectTrigger>
              <SelectContent className="w-20 myst">
                <SelectGroup>
                  <SelectLabel>Tags</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>
      </div>

      <div className="mt-5 max-w-5xl min-h-[500px]">
        <Label htmlFor="blog">Write Your Post</Label>
        <TextEditor blog={blog} setBlog={setBlog} />
      </div>
    </section>
  );
}
