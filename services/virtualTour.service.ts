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
                description: true,
                tags: true
                // Tag: true,
            },
        });
    }
}