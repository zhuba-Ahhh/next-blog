import { visit } from 'unist-util-visit';

export default function rehypeInlineCode() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'code' && node.properties && !node.properties.className) {
        node.properties.className = ['inline-code'];
      }
    });
  };
}