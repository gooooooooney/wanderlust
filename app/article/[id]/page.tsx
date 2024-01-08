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
  return (
    <div>BlogPage: {id}</div>
  )
}

export default BlogPage