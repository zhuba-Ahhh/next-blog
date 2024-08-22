import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              &copy; 2024 我的博客. 保留所有权利。
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline mx-2 my-1"
            >
              隐私政策
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline mx-2 my-1"
            >
              使用条款
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline mx-2 my-1"
            >
              联系我们
            </Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>本网站使用 Next.js 和 Tailwind CSS 构建</p>
        </div>
      </div>
    </footer>
  );
}
