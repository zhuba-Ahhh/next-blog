import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold hover:text-secondary transition duration-300"
        >
          我的博客
        </Link>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link
              href="/"
              className="hover:text-secondary transition duration-300"
            >
              首页
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-secondary transition duration-300"
            >
              博客
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-secondary transition duration-300"
            >
              关于
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
