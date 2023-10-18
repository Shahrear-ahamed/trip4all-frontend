import ReactQuill from "react-quill";

type IBlogProps = {
  blog: string;
  setBlog: (value: string) => void;
};

export default function TextEditor({ blog, setBlog }: IBlogProps) {
  return (
    <ReactQuill
      theme="snow"
      value={blog}
      onChange={setBlog}
      id="blog"
      className="h-[300px]"
    />
  );
}
