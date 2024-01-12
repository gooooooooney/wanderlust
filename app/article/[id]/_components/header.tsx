import { title } from '@/components/primitives'
import React from 'react'
import { ShareButton } from './share-button';
import { cn } from '@/lib/utils';
import { User } from '@nextui-org/user';


type ShareButtonProps = {
  titleName?: string;
  time: string;
  userName: string;
  userAvatar: string;
  userDesc?: string;
}

export const ArticleHeader = ({
  titleName,
  time,
  userName,
  userAvatar,
  userDesc
}: ShareButtonProps) => {
  return (
    <section className="flex flex-col gap-y-6 w-full">
      <h1 className={cn("tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl", title({ size: "sm" }))}>
        {titleName}
      </h1>
      <time
        dateTime={time}
        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        <span className="ml-3">{time}</span>
      </time>
      <div className='flex justify-between items-center'>
        <User
          name={userName}
          avatarProps={{
            // color: "warning",
            name: userName,
            src: userAvatar
          }}
          description={userDesc}

        />
        <ShareButton title={titleName} />
      </div>
    </section>
  )
}
