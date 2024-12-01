'use client'
import { useEffect, useState } from "react";
import FeedImg from "./feedImg";

export default function FeedArea() {
  const [fileList, setFileList] = useState<string[]>(['','','']);

  useEffect(() => {
    console.log('file list cambiado');
    console.log(fileList)

  }, [fileList]);

  return (
    <div className="grid grid-cols-3 gap-1">
        {fileList.map((file,i) => (
            <FeedImg key={file + i} index={i} listSetter={setFileList} />
        ))}
    </div>
  )
}