
import { BlocksContainer } from '@/components/notion/blocks-container';
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

  return (
    <>
    <BlocksContainer initialBlocks={blocks} />
    </>
  )
}

export default BlogPage