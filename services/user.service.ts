import { USER_ID } from "@/constants/constant";
import { db } from "@/lib/db";



export class UserService {
  static async getUserInfo() {
    return await db.user.findUnique({
      where: {
        id: USER_ID
      },
      select: {
        name: true,
        image: true,
        pageInfo: {
          select: {
            banner: true
          }
        },
        description: true,
        virtualTours: {
          include: {
            tags: true
          }
        },
        // Tag: true,
      },
    })
  }
}