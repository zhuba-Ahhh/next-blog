import { Label, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui";

type SortOption = "date" | "title";

interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
}

export function BlogSearch({ searchTerm, onSearchChange, sortOption, onSortChange }: BlogSearchProps) {
  return (
    <div className="mb-6 flex items-end space-x-4">
      <div className="flex-grow">
        <Label htmlFor="search" className="mb-2 block">
          搜索文章
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="输入关键词..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
      <div className="w-40">
        <Label htmlFor="sort" className="mb-2 block">
          排序方式
        </Label>
        <Select onValueChange={onSortChange} defaultValue={sortOption}>
          <SelectTrigger id="sort" className="w-full" aria-label="选择排序方式">
            <SelectValue placeholder="选择排序方式" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">按日期排序</SelectItem>
            <SelectItem value="title">按标题排序</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}