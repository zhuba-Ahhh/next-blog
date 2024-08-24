import { Badge, Button } from "@/components/ui";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TagListProps {
  allTags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string | null) => void;
  isTagsExpanded: boolean;
  onToggleExpand: () => void;
  initialTagCount: number;
}

export function TagList({ allTags, selectedTag, onTagClick, isTagsExpanded, onToggleExpand, initialTagCount }: TagListProps) {
  const visibleTags = isTagsExpanded ? allTags : allTags.slice(0, initialTagCount);

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      <Badge
        variant={selectedTag === null ? "default" : "secondary"}
        className="cursor-pointer"
        onClick={() => onTagClick(null)}
      >
        全部
      </Badge>
      {visibleTags.map((tag) => (
        <Badge
          key={tag}
          variant={tag === selectedTag ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </Badge>
      ))}
      {allTags.length > initialTagCount && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleExpand}
          className="ml-2"
        >
          {isTagsExpanded ? (
            <>
              收起 <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              展开 <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}