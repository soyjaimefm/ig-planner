
'use client'
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { useState } from 'react';
import FeedImg from '@/components/feedImg';

export default function Page() {
  const [disableDnd, setDisableDnd ] = useState(false);

  // Example parent configuration object:
  const config = {
    sortable: true,
    disabled: false,
  }

  // <li className="bg-gray-700 size-32 hover:opacity-70 text-white text-center flex flex-col justify-center pointer-events-auto cursor-pointer" data-label={value} key={value}>{value}</li>

  // React:
  const [parentRef, values, setValues, updateConfig] = useDragAndDrop<HTMLUListElement, string>(
    ['Item 1', 'Item2', 'Item3','Item 4', 'Item5', 'Item6','Item 7', 'Item8', 'Item9'],
    config
  );

  const toggleUpload = () => {
    setDisableDnd((current) => {
      updateConfig({disabled: !current
      });
      return !current;
    });
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between py-24 bg-re ${disableDnd ? 'bg-red-200' : ''}`}>
      <ul className="grid grid-cols-3 gap-1" ref={parentRef}>
        {
          values.map((value)=> (
            <FeedImg index={value} key={value} />
          ))
        }
      </ul>
      <button onClick={toggleUpload}>Enable uploading</button>
    </main>
  )
}
