import { NotionRender } from '@/components/notion/notion-render';
import { NotionService } from '@/services/notion.service';
import React from 'react'

type BlogPageProps = {
  params: {
    id: string;
  };
}

const BlogPage = async ({params}: BlogPageProps) => {
  const { id } = params;
  const blocks = await NotionService.getBlocks(id);
  console.log("---------")
  console.log(JSON.stringify(blocks))

  return (
    <>
    <NotionRender blocks={blocks} />
    </>
  )
}

export default BlogPage