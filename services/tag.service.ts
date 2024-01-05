import { db } from "@/lib/db";

export class TagService {

  static async getTagsById(id: string) {
    return await db.tag.findUnique({
        where: { id},
        select: {
            name: true,
            virtualTours: {
                include: {
                    tags: true
                }
            }
        }
    })
  }
}