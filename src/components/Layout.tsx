import { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { debounce } from "lodash"; // 需要安装lodash库

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setShowScrollTop(window.pageYOffset > 300);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-4 pb-8">
        {children}
      </main>
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 ease-in-out"
          aria-label="滚动到顶部"
        >
          ↑
        </button>
      )}
    </div>
  );
}
