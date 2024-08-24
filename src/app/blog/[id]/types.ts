export interface Heading {
  level: number;
  text: string;
  slug: string;
}

export interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}