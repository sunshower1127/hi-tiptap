"use client";

import useTiptapEditor from "@/hooks/use-tiptap-editor";
import { Editor, EditorContent } from "@tiptap/react";
import { debounce, once } from "es-toolkit";

const savePost = debounce((editor: Editor) => {
  localStorage.setItem("post", editor.getHTML());
}, 500);

// useEffect 쓰기엔 제대로 적용이 안되고(아래 주석참고)
// 이게 최선인듯? 어차피 서버사이드니깐
const getPost = once(() => (typeof window !== "undefined" ? localStorage.getItem("post") : null));

export default function TiptapEditor() {
  // const [initialContent, setInitialContent] = useState<string | null>(null);
  // console.log("initialContent", initialContent);

  // useEffect(() => {
  //   setInitialContent(localStorage.getItem("post"));
  // }, []);
  // 이 방식은 클라이언트사이드에서 초기에 null값이 되기때문에 초기값이 반영 안됨.

  const editor = useTiptapEditor({ initialContent: getPost(), editable: true });

  if (editor) savePost(editor);

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
}
