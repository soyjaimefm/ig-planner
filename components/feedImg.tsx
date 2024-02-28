'use client'

import { handleInputChange, handleInputChangeDrop } from '@/utils/readFile';

import { useState } from "react";

export default function FeedImg({ index }) {
  const [file, setFile] = useState('');

  return (
    <div className="bg-gray-700 size-32 hover:opacity-70">
      {
        file != '' ? <img className="h-full w-full object-cover" src={file} alt="" /> :
          <label onDrop={(e) => { handleInputChangeDrop(e, setFile) }} onDragOver={(e) => { e.preventDefault() }} draggable htmlFor={'dropzone-file' + index} className="flex items-center justify-center w-full h-full cursor-pointer">
            <p className="text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">{index}Click to upload</span> or drag and drop</p>
            <input id={'dropzone-file' + index} draggable className='hidden' type="file" accept="image/*" name="image" onChange={(e) => { handleInputChange(e, setFile) }} />
          </label>
      }
    </div>
  )
}