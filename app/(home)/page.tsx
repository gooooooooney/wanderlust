import EmblaCarousel from "@/components/carousel/embla-carousel";
import { PageInfoService } from "@/services/pageInfo.service";
import { UserService } from "@/services/user.service";
import { Cards } from "../../components/cards";
import { Video } from "./_components/introduction/video";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Container } from "@/components/Container";
import { UserInfo } from "./_components/introduction/userinfo";
import { NotionService } from "@/services/notion.service";
import { BlogList } from "./_components/blog-list";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { cn } from "@/lib/utils";
import { title } from "@/components/primitives";

export default async function Home() {
  const userInfo = await UserService.getUserInfo();
  const vts = userInfo?.virtualTours;
  const database = await NotionService.getDatabase();
  if (!userInfo) {
    return null;
  }
  return (
    <div>
      <FadeInStagger faster className="w-full">
        <EmblaCarousel banners={userInfo.pageInfo?.banner || []} />
      </FadeInStagger>
      <Container className="flex flex-col gap-y-10">
        <FadeInStagger
          faster
          className="grid grid-cols-1 gap-y-8 md:grid-cols-[1fr,2fr] my-20"
        >
          <UserInfo
            name={userInfo.name || ""}
            avatar={userInfo.image || ""}
            description={userInfo.description || ""}
            email={userInfo.email || ""}
          />
          <Video source={userInfo.videoSrc || ""} />
        </FadeInStagger>
        <FadeIn className="flex flex-col justify-center py-24 sm:py-32">
          <div>
            <h2 className={cn(title({ size: "sm" }))}>Projects</h2>
            <p className="mt-2 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
              Explore the virtual tour project.
            </p>
          </div>
          <Cards className="mt-16" vts={vts || []} />
        </FadeIn>

        <BlogList blogs={database.results as PageObjectResponse[]} />
        {/* <FadeIn className="flex my-20 justify-center">
          <Video />
        </FadeIn> */}
      </Container>
    </div>
  );
}
