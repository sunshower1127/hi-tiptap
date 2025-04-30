"use client";

import useTiptapEditor from "@/hooks/use-tiptap-editor";
import { EditorContent } from "@tiptap/react";
import { once } from "es-toolkit";

const getPost = once(() => (typeof window !== "undefined" ? localStorage.getItem("post") : null));

export default function TitapViewer() {
  const editor = useTiptapEditor({ editable: false, initialContent: getPost() });
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
