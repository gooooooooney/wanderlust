import EmblaCarousel from "@/components/carousel/embla-carousel";
import { PageInfoService } from "@/services/pageInfo.service";
import { UserService } from "@/services/user.service";
import { UserInfo } from "./_components/userinfo";


export default async function Home() {
	const userInfo = await UserService.getUserInfo()
	if (!userInfo) {
		return null
	}
	return (
		<div>
			<section className="w-full">
				<EmblaCarousel banners={userInfo.PageInfo?.Banner || []} />
			</section>
			<section>
				<UserInfo name={userInfo.name || ""} avatar={userInfo.image || ""} description={userInfo.description || ""} />
			</section>
		</div>
	);
}
