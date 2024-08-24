import { useMemo } from 'react';

export function extractHeadings(content: string) {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      slug: match[2].toLowerCase().replace(/\s+/g, "-"),
    });
  }

  return headings;
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function useExtractHeadings(content: string) {
  return useMemo(() => extractHeadings(content), [content]);
}

export function useEstimateReadingTime(content: string) {
  return useMemo(() => estimateReadingTime(content), [content]);
}