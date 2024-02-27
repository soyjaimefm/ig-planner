import Link from "next/link";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">

      <Link href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_ID}&redirect_uri=${'https://ig-planner-beta.vercel.app/'}&scope=${'user_profile,user_media'}&response_type=code`}>Instagram</Link>
    </main>
  );
}
