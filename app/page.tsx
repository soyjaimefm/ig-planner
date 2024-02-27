import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">

      {/* <iframe
        src={`https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_ID}&redirect_uri=${'https://ig-planner-beta.vercel.app/'}&scope=${'user_profile,user_media'}&response_type=code`}
        allowFullScreen
      /> */}
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-gray-700 size-32">
          <img className="aspect-square object-cover" src="/jaimefm-3.jpeg" alt="" />
        </div>
        <div className="bg-gray-700 size-32">
          <img className="aspect-square object-cover" src="/lapicara-web.png" alt="" />
        </div>
        <div className="bg-gray-700 size-32">
          <img className="aspect-square object-cover" src="/testing-image.jpg" alt="" />
        </div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
      </div>

      <button className="mt-6 p-2 border">Añadir</button>
      <Link href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_ID}&redirect_uri=${'https://ig-planner-beta.vercel.app/'}&scope=${'user_profile,user_media'}&response_type=code`}>Instagram</Link>
    </main>
  );
}
