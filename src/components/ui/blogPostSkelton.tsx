import { Skeleton } from "@/components/ui/skeleton";

export function BlogPostSkelton({ totalBlog }: { totalBlog: number }) {
  return Array(totalBlog).map((_, index) => (
    <div key={index} className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ));
}