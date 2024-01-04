import EmblaCarousel from "@/components/carousel/embla-carousel";
import { PageInfoService } from "@/services/pageInfo.service";
import { UserService } from "@/services/user.service";
import { UserInfo } from "./_components/userinfo";
import { Cards } from "./_components/cards";

export default async function Home() {
  const userInfo = await UserService.getUserInfo();
  const vts = userInfo?.VirtualTour
  if (!userInfo) {
    return null;
  }
  return (
    <div>
      <section className="w-full">
        <EmblaCarousel banners={userInfo.PageInfo?.Banner || []} />
      </section>
      <div className="flex flex-col gap-y-10">
        <section>
          <UserInfo
            name={userInfo.name || ""}
            avatar={userInfo.image || ""}
            description={userInfo.description || ""}
          />
        </section>
        <section className="flex justify-center my-4">
          <Cards vts={vts || []} />
        </section>
      </div>
    </div>
  );
}
