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
      <Container className="flex max-w-[90rem] flex-col gap-y-10">
        <FadeInStagger
          faster
          className="grid grid-cols-1 gap-y-8 md:grid-cols-[1fr,2fr] my-20"
        >
          <UserInfo
            name={userInfo.name || ""}
            avatar={userInfo.image || ""}
            description={userInfo.description || ""}
          />
          <Video source={userInfo.videoSrc || ""} />
        </FadeInStagger>
        <FadeIn className="flex justify-center my-4">
          <Cards vts={vts || []} />
        </FadeIn>

        <BlogList blogs={database.results as PageObjectResponse[]} />
        {/* <FadeIn className="flex my-20 justify-center">
          <Video />
        </FadeIn> */}
      </Container>
    </div>
  );
}
