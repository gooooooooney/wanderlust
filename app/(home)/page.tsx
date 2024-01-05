import EmblaCarousel from "@/components/carousel/embla-carousel";
import { PageInfoService } from "@/services/pageInfo.service";
import { UserService } from "@/services/user.service";
import { Cards } from "./_components/cards";
import { Video } from "./_components/introduction/video";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Container } from "@/components/Container";
import { UserInfo } from "./_components/introduction/userinfo";

export default async function Home() {
  const userInfo = await UserService.getUserInfo();
  const vts = userInfo?.virtualTours
  if (!userInfo) {
    return null;
  }
  return (
    <div>
      <FadeInStagger faster className="w-full">
        <EmblaCarousel banners={userInfo.pageInfo?.banner || []} />
      </FadeInStagger>
      <Container className="flex max-w-[90rem] flex-col gap-y-10">
        <FadeInStagger faster className="grid grid-cols-1 gap-y-8 md:grid-cols-[1fr,2fr] my-20">
          <UserInfo
            name={userInfo.name || ""}
            avatar={userInfo.image || ""}
            description={userInfo.description || ""}
          />
          <Video />
        </FadeInStagger>
        <Container>
          <FadeIn className="flex justify-center my-4">
            <Cards vts={vts || []} />
          </FadeIn>
        </Container>


        {/* <FadeIn className="flex my-20 justify-center">
          <Video />
        </FadeIn> */}
      </Container>
    </div>
  );
}
