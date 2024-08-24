import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  coverImage?: string;
  tags: string[];
}

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

export interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}