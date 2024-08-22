import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light transition duration-300"
        >
          我的博客
        </Link>
        <ul className="flex items-center space-x-6 mt-4 md:mt-0">
          <li>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition duration-300"
            >
              首页
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition duration-300"
            >
              博客
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition duration-300"
            >
              关于
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}