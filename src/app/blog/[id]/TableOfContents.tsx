import React, { useCallback } from "react";
import { Heading } from "./types";
import { scrollToTop } from "@/utils";

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
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
      }
    },
    []
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-[240px] mr-2">
      <h2
        className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 cursor-pointer"
        onClick={scrollToTopFn}
      >
        文章目录
      </h2>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className={`${
                heading.level === 3 ? "ml-4" : ""
              } hover:bg-gray-100 dark:hover:bg-gray-700 rounded`}
            >
              <a
                href={`#${heading.slug}`}
                onClick={(e) => handleClick(e, heading.slug)}
                className="text-gray-600 dark:text-gray-300 text-sm block py-1 px-2 hover:text-blue-500 transition-colors duration-200"
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
