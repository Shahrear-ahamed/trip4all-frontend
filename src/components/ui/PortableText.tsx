import React from "react";

export default function PortableText({ text }: { text: any }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      className="text-justify text-gray-600 font-light tracking-wide leading-6 cursor-default mt-5 [&>ol]:pl-8 [&>ul]:pl-8 [&>ol]:list-decimal [&>ul]:list-disc [&>p>a]:text-primary [&>p>a]:hover:text-primary-dark duration-300"
    />
  );
}
