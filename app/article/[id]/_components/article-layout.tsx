import { Container } from '@/components/Container'
import { Prose } from '@/components/notion/prose/Prose'
import { dateFormat } from '@/lib/date'
import { User } from '@nextui-org/user'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import {
  getFiles,
  getPlainText,
  getSelect,
  getTags,
  getTitle,
} from "@/lib/notion/guard/properties-guard";
import { cn } from '@/lib/utils'
import { title } from '@/components/primitives'
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { getCoverUrl } from '@/lib/notion/guard/cover-guard'
import "./article-layout.css"

type ArticleProps = {
  page: PageObjectResponse
  children: React.ReactNode
}

export const ArticleLayout = ({
  page,
  children,
}: ArticleProps) => {
  const properties = page.properties
  const name = getTitle(properties.title)

  return (
    <div>
      <Image
        as={NextImage}
        // width={256}
        // height={256}
        fill
        //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={getCoverUrl(page.cover)}
        alt=""
        radius='none'
        classNames={{
          wrapper: "relative overflow-hidden !max-w-none w-full h-80 ",
        }}
        className="absolute inset-0 diagonal-object-position rounded-b-sm object-cover "
      />
      <Container className="mt-8 lg:mt-10">
        <div className="xl:relative">
          <div className="mx-auto w-full">

            {/* <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </button> */}

            <article>
              <header className="flex flex-col gap-y-6">
                <h1 className={cn("tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl", title({ size: "sm" }))}>
                  {name}
                </h1>
                <time
                  dateTime={dateFormat(page.created_time)}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{dateFormat(page.created_time, "EEEE, MMM dd, yyyy")}</span>
                </time>
                <div >
                  <User
                    name={getPlainText(properties.author)}
                    avatarProps={{
                      // color: "warning",
                      name: getPlainText(properties.author),
                      src: getFiles(properties.author_avatar)[0] || ""
                    }}
                    description={getSelect(properties.author_title)?.name}

                  />
                </div>
              </header>
              <Prose className="mt-8 " data-mdx-content>
                {children}
              </Prose>
            </article>
          </div>
        </div>
      </Container>
    </div>
  )
}
