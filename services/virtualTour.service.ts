import { db } from "@/lib/db";

export class VirtualTourService {
    static async getVirtualTourInfo(id: string) {
        return await db.virtualTour.findUnique({
            where: {
                id
            },
            select: {
                link: true,
                coverSrc: true,
                title: true,
                tags: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                // Tag: true,
            },
        });
    }
}