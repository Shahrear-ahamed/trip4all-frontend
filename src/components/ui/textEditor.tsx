"use client"

import dynamic from "next/dynamic";

// import ReactQuill from "react-quill";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

type ITextEditorProps = {
  text: string;
  setText: (value: string) => void;
};

export default function TextEditor({ text, setText }: ITextEditorProps) {
  return (
    <ReactQuill
      theme="snow"
      value={text}
      onChange={setText}
      className="h-[300px]"
    />
  );
}
