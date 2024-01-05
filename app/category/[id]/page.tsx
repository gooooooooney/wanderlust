import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Cards } from "@/components/cards";
import { TagService } from "@/services/tag.service";
import React from "react";

type CategoryPageProps = {
  params: {
    id: string;
  };
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = params;
  const tag = await TagService.getTagsById(id);
  if (!tag) {
    return null;
  }
  return (
    <Container className="mt-4">
      <FadeIn>
        <h1 className="text-4xl font-bold my-8">{tag.name}</h1>
      </FadeIn>
      <Cards vts={tag.virtualTours} />
    </Container>
  );
};

export default CategoryPage;
