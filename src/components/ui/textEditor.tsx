"use client";

import ReactQuill from "react-quill";

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
