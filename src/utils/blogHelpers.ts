import { useMemo } from "react";

export function extractHeadings(content: string) {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  const slugCounts: Record<string, number> = {};
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2];
    let slug = text.toLowerCase().replace(/\s+/g, "-");

    // 检查slug是否已存在，如果存在，则添加数字
    if (slug in slugCounts) {
      slugCounts[slug]++;
      slug = `${slug}-${slugCounts[slug]}`;
    } else {
      slugCounts[slug] = 0;
    }

    headings.push({
      level: match[1].length,
      text: text,
      slug: slug,
    });
  }

  return headings;
}

export function estimateReadingTime(content: string): number[] {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return [Math.ceil(wordCount / wordsPerMinute), wordCount];
}

export function useExtractHeadings(content: string) {
  return useMemo(() => extractHeadings(content), [content]);
}

export function useEstimateReadingTime(content: string) {
  return useMemo(() => estimateReadingTime(content), [content]);
}
