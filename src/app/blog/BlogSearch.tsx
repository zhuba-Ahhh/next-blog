import {
  Label,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui";

type SortOption = "date" | "title"; // 保留排序类型

interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortOption: SortOption;
  sortOrder: "asc" | "desc"; // 保留排序顺序
  onSortChange: (option: SortOption, order: "asc" | "desc") => void; // 修改为同时处理排序类型和顺序
}

export function BlogSearch({
  searchTerm,
  onSearchChange,
  sortOption,
  sortOrder,
  onSortChange,
}: BlogSearchProps) {
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
        <Select
          onValueChange={(value) => {
            const [option, order] = value.split("-"); // 解析选项和顺序
            onSortChange(option as SortOption, order as "asc" | "desc");
          }}
          defaultValue={`${sortOption}-${sortOrder}`}
        >
          <SelectTrigger id="sort" className="w-full" aria-label="选择排序方式">
            <SelectValue placeholder="选择排序方式" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date-asc">按日期升序</SelectItem>{" "}
            {/* 合并选项 */}
            <SelectItem value="date-desc">按日期降序</SelectItem>{" "}
            {/* 合并选项 */}
            <SelectItem value="title-asc">按标题升序</SelectItem>{" "}
            {/* 合并选项 */}
            <SelectItem value="title-desc">按标题降序</SelectItem>{" "}
            {/* 合并选项 */}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
