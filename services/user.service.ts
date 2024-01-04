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
        PageInfo: {
          select: {
            Banner: true
          }
        },
        description: true,
        VirtualTour: true,
        Tag: true,
      }
    })
  }
}