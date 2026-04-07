import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
export default function Landing() {
  return (
    <div className="min-h-screen w-screen bg-background">
      {/* <Navbar /> */}
      <header className="fixed top-0 w-screen bg-white/70 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="w-32 text-xl font-semibold text-primary">
            PureUs ❤️
          </div>

          <nav className="flex items-center gap-6 text-sm text-textSecondary">
            <a href="#" className="hover:text-primary">
              Features
            </a>
            <a href="#" className="hover:text-primary">
              Explore
            </a>
            <a href="#" className="hover:text-primary">
              Blog
            </a>
          </nav>
          <Link to="/login">
            <Button className="w-32">Login</Button>
          </Link>
        </div>
      </header>
      {/* <Hero /> */}
      <section className="pt-32 pb-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-textPrimary leading-tight">
          Record Your{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Love Story
          </span>
        </h1>

        <p className="mt-6 text-lg text-textSecondary max-w-2xl mx-auto">
          Create a private space for two, keep every precious moment, and share
          your story with the world.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-primary text-white px-8 py-3 rounded-xl shadow-soft hover:opacity-90 transition">
            Start Your Story ❤️
          </button>

          <button className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-gray-100 transition">
            Explore
          </button>
        </div>
      </section>
      {/* <Features /> */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-textPrimary">Why PureUs?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mt-2 text-textSecondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <footer className="py-10 text-center text-sm text-textSecondary">
        <p>© 2026 PureUs. Made with ❤️</p>
      </footer>
    </div>
  );
}

const features = [
  {
    title: 'Couple Space',
    desc: 'Create a private world just for two.',
    icon: '❤️',
  },
  {
    title: 'Love Diary',
    desc: 'Record your daily moments and memories.',
    icon: '📖',
  },
  {
    title: 'Public Moments',
    desc: 'Share your love story with others.',
    icon: '🌍',
  },
  {
    title: 'Privacy Control',
    desc: 'Decide what to keep private or public.',
    icon: '🔒',
  },
];
