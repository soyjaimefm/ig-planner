import FeedImg from "@/components/feedImg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="grid grid-cols-3 gap-1">
        <FeedImg index={'1'} />
        <FeedImg index={'2'} />
        <FeedImg index={'3'} />
        <FeedImg index={'4'} />
        <FeedImg index={'5'} />
        <FeedImg index={'6'} />
        <FeedImg index={'7'} />
        <FeedImg index={'8'} />
        <FeedImg index={'9'} />
        <FeedImg index={'10'} />
        <FeedImg index={'11'} />
        <FeedImg index={'12'} />
      </div>
      {/* <Link href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_ID}&redirect_uri=${'https://ig-planner-beta.vercel.app/'}&scope=${'user_profile,user_media'}&response_type=code`}>Instagram</Link> */}
    </main>
  );
}
