import React, { useCallback, useState, useEffect } from "react";
import { Heading } from "./types";
import { scrollToTop } from "@/utils";

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>("");

  const scrollToTopFn = useCallback(scrollToTop, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Adjust this value to fit your page layout
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveId(id); // Update activeId when clicked
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-[240px] mr-2">
      <h2
        className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
        onClick={scrollToTopFn}
      >
        文章目录
      </h2>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className={`${heading.level === 3 ? "ml-3" : ""} rounded`}
            >
              <a
                href={`#${heading.slug}`}
                onClick={(e) => handleClick(e, heading.slug)}
                className={`text-sm block py-1 px-2 transition-colors duration-200 rounded
                  ${
                    activeId === heading.slug
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
                title={heading.text}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
