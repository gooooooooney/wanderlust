import { getCoverUrl } from "@/lib/notion/guard/cover-guard";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { dateFormat } from "@/lib/date";
import {
  getFiles,
  getPlainText,
  getSelect,
  getTags,
  getTitle,
} from "@/lib/notion/guard/properties-guard";
import { cn } from "@/lib/utils";
import { subtitle, title } from "@/components/primitives";
import { Avatar } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { generateColor } from "@/lib/color";
import { Text } from "@/components/ui-kit/text";
import { FadeIn } from "@/components/FadeIn";
import { Tags } from "@/components/tags";

type BlogProps = {
  blog: PageObjectResponse;
};

export const Blog = ({ blog }: BlogProps) => {
  const cover = blog.cover;
  const properties = blog.properties;
  return (
    <FadeIn>
      <article
        key={blog.id}
        className="relative isolate flex flex-col gap-8 lg:flex-row"
      >
        <Image
          as={NextImage}
          // width={256}
          // height={256}
          fill
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={getCoverUrl(blog.cover)}
          alt=""
          classNames={{
            wrapper: "relative aspect-[16/9] overflow-hidden sm:aspect-[2/1] lg:aspect-square !max-w-none lg:w-64 lg:shrink-0",
          }}
          className="absolute inset-0  transform hover:scale-125 h-full w-full rounded-2xl bg-gray-50   object-cover "
        />

        <div>
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={blog.created_time} className="text-gray-500">
              {dateFormat(blog.created_time)}
            </time>
            <Tags hrefPrefix="/tag" tags={getTags(properties.category)} />
          </div>
          <div className="group relative max-w-xl">
            <h3 className={cn(title({ size: "xs" }))}>
              <Link href={`/article/${blog.id}`}>
                <span className="absolute inset-0" />
                {getTitle(properties.title)}
              </Link>
            </h3>
            <Text className="mt-5">{getPlainText(properties.description)}</Text>
          </div>
          <Divider orientation="horizontal" className="mt-6" />
          <div className="mt-6 flex ">
            <div className="relative flex items-center gap-x-4">
              <Avatar
                color="warning"
                name={getPlainText(properties.author)}
                src={getFiles(properties.author_avatar)[0] || ""}
              />
              <div className="text-sm leading-6">
                <p className="font-semibold">
                  <span className="absolute inset-0" />
                  {getPlainText(properties.author)}
                </p>
                <p className="text-gray-600 dark:text-gray-500">
                  {getSelect(properties.author_title)?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
};
