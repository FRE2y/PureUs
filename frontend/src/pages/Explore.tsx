import Button from '../components/ui/Button';

const posts = [
  {
    title: 'Our first trip ✈️',
    desc: 'We traveled to Kyoto together...',
    likes: 120,
  },
  {
    title: 'Anniversary 💕',
    desc: 'Celebrating 2 years together!',
    likes: 89,
  },
  {
    title: 'Daily moments ☕',
    desc: 'Simple coffee dates matter most.',
    likes: 54,
  },
  {
    title: 'Our first trip ✈️',
    desc: 'We traveled to Kyoto together...',
    likes: 120,
  },
  {
    title: 'Anniversary 💕',
    desc: 'Celebrating 2 years together!',
    likes: 89,
  },
  {
    title: 'Daily moments ☕',
    desc: 'Simple coffee dates matter most.',
    likes: 54,
  },
  {
    title: 'Our first trip ✈️',
    desc: 'We traveled to Kyoto together...',
    likes: 120,
  },
  {
    title: 'Anniversary 💕',
    desc: 'Celebrating 2 years together!',
    likes: 89,
  },
  {
    title: 'Daily moments ☕',
    desc: 'Simple coffee dates matter most.',
    likes: 54,
  },
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      {/* ✅ 顶部导航栏 */}
      <header className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">PureUs</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="text-primary font-semibold">
            Explore
          </a>
          <a href="#" className="hover:text-primary">
            Profile
          </a>
        </nav>
      </header>

      {/* ✅ 页面标题
      <div className="px-6 py-8 text-center">
        <h2 className="text-3xl font-bold">Explore Love Stories 🌍</h2>
      </div> */}

      {/* ✅ 纵向内容流（类似小红书 / 微博） */}
      <main className="max-w-2xl mx-auto px-4 flex flex-col gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>

            <p className="mt-2 text-sm text-textSecondary">{post.desc}</p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-primary">
                ❤️ {post.likes} likes
              </span>

              <Button>View</Button>
            </div>
          </div>
        ))}
      </main>

      {/* ✅ Load more */}
      <div className="mt-10 text-center pb-10">
        <Button>Load More</Button>
      </div>
    </div>
  );
}
