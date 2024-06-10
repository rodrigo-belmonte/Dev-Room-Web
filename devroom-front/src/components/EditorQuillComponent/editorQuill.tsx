import { useState } from "react";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import styles from "./editorQuill.module.scss";

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

export interface EditorProps {
  value?: string;
  onChange?: (changes: string) => void;
}

function EditorQuill(props: EditorProps) {
  const [value, setValue] = useState("");

  const onChange = (content: string) => {
    setValue(content);

    if (props.onChange) {
      props.onChange(content);
    }
  };

  return (
    <div className={styles.textEditor}>
      <ReactQuill
        theme="snow"
        modules={{toolbar: {
            container: toolbarOptions}}
        }
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default EditorQuill;
