import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Blog } from "./blog";
import { cn } from "@/lib/utils";
import { title } from "@/components/primitives";
import { FadeIn } from "@/components/FadeIn";

export type BlogProps = {
  blogs: PageObjectResponse[];
};

export const BlogList = ({ blogs }: BlogProps) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <FadeIn>
            <h2 className={cn(title({ size: "sm" }))}>Story</h2>
            <p className="mt-2 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
              Explore the virtual tour stories.
            </p>
          </FadeIn>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogs.map((blog) => (
              <Blog blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

