import React from "react";
import { Heading } from "./types";

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents = React.memo(function TableOfContents({
  headings,
}: TableOfContentsProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg sticky top-20 w-[240px] mr-2">
      <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
        目录
      </h2>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <li key={index} className={`${heading.level === 3 ? "ml-2" : ""}`}>
              <a
                href={`#${heading.slug}`}
                className="text-primary dark:text-primary-light text-sm block truncate"
                title={heading.text}
              >
                {heading.text.length > 20
                  ? heading.text.slice(0, 20) + "..."
                  : heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

export default TableOfContents;
