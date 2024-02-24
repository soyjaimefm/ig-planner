import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">

      <iframe
        src={`https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_ID}&redirect_uri=${'/'}&scope=${'user_profile,user_media'}&response_type=code`}
      />
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
        <div className="bg-gray-700 size-32"></div>
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
    </main>
  );
}
