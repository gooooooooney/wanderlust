import { USER_ID } from "@/constants/constant"
import { db } from "@/lib/db"

export class PageInfoService {
  static async getBanners() {
    const pageInfo = await db.pageInfo.findUnique({
      where: {
        userId: USER_ID,
      },
      select: {
        banner: true
      }
    })
    return {
      banners: pageInfo?.banner || []
    }
  }
}